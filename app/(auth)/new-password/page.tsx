"use client"

import { toast } from "sonner"
import { useRouter, useSearchParams } from "next/navigation"
import { MouseEvent, useState, useTransition } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { newPassword } from "@/app/action/new-passwrod"
import { Eye, EyeOff } from "lucide-react"

type PasswordField = 'newPassword' | 'confirmPassword';

const SignInForm=()=>{
    const router = useRouter()
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const [showPassword, setShowPassword] = useState({
        newPassword: false,
        confirmPassword: false,
    });
    const [isPending, startTransition] = useTransition();
    
    const handleSubmit = async (formData: FormData) => {
        const password = formData.get("password") as string
        const confirmpassword = formData.get("confirmPassword") as string

        if(password==confirmpassword){
            startTransition(() =>{
                newPassword({ password }, token).then((data) =>{
                    if(data.success) {
                        router.push("/sign-in");
                    }else{
                        toast.error("Error while set New Password.")
                    }
                });
            })
        }else{
            toast.error("Password and Confirm Password Should Match.")
        }
    }

    const togglePasswordVisibility = (event: MouseEvent<HTMLButtonElement>) => {
        const { name } = event.currentTarget;
    
        setShowPassword((prevState) => ({
          ...prevState,
          [name as PasswordField]: !prevState[name as PasswordField],
        }));
    };
    
    return(
        <div className="pt-[2.4rem] mb-[5.4rem]">    
            <div className="max-w-md mx-auto border rounded-xl overflow-hidden p-8 space-y-6">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
                    <p className="text-muted-foreground">Create Your New Password.</p>
                </div>

                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(new FormData(e.currentTarget));
                    }}>
                    <div className="grid gap-4">

                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Input
                                id="password"
                                name="password"
                                type={showPassword.newPassword ? "text" : "password"}
                                placeholder="Enter Your New Password."
                                />
                                <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                name="newPassword"
                                className="border-l rounded-none absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                onClick={togglePasswordVisibility}
                                aria-label={showPassword.newPassword ? "Hide password" : "Show password"}
                                >
                                {showPassword.newPassword ? (
                                    <EyeOff className="h-6 w-6 text-muted-foreground" />
                                ) : (
                                    <Eye className="h-6 w-6 text-muted-foreground" />
                                )}
                                </Button>
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <div className="relative">
                                <Input id="confirmPassword" name="confirmPassword"  type={showPassword.confirmPassword ? "text" : "password"} placeholder="Comfirm Your New Password." />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    name="confirmPassword"
                                    className="border-l rounded-none absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                    onClick={togglePasswordVisibility}
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword.confirmPassword ? (
                                    <EyeOff className="h-6 w-6 text-muted-foreground" />
                                    ) : (
                                    <Eye className="h-6 w-6 text-muted-foreground" />
                                    )}
                                </Button>
                            </div>
                        </div>

                        <Button type="submit" className="w-full" disabled={isPending}>{isPending ? "Setting New Password..." : "Set New Password"}</Button>
                    </div>
                </form>
            </div>
        </div>  
    )
}

export default SignInForm