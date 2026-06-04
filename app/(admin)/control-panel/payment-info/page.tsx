import { auth } from "@/auth";
import AdminPayment from "@/components/admin-payment";
import { API_ENDPOINT, BASE_URL } from "@/config/api-endpoint";
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";

const callmyPurchgases=async(token:string, searchParamsStr: string)=>{
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`)

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
    };

    let response = await fetch(`${BASE_URL}${API_ENDPOINT.myPurchase}?${searchParamsStr}`,requestOptions);
    let data = response.json();

    return data
}

export default async function ControlPanel({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; search?: string }>
}) {
    const session = await auth();
    const cookieStore = await  cookies()
    const env = process.env.NODE_ENV

    const isDev = env == "development" ?  "authjs.session-token": "__Secure-authjs.session-token"
    const token = cookieStore.get(isDev)?.value as string

    if(!session){
        redirect("/")
    }
    
    const params = await searchParams;
    const page = parseInt(params.page || "1");
    const search = params.search || "";
    
    const queryParams = new URLSearchParams();
    queryParams.set("page", page.toString());
    if (search) queryParams.set("search", search);

    const getData = await callmyPurchgases(token, queryParams.toString())
  return (
    <AdminPayment 
      purchases={getData?.payments || []} 
      emailTemp={getData?.emailTemplate || []} 
      token={token} 
      totalPurchases={getData?.totalPurchases || 0}
      page={page}
    />
)
}
