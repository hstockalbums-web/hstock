import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { db } from "@/db";
import { isDevCookies } from "@/config/api-endpoint";

export async function GET(req: NextRequest) {
  const secret = process.env.AUTH_SECRET;
  const token = await getToken({ req, secret, cookieName: isDevCookies });

  if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const search = searchParams.get("search") || "";
    const limit = 50;

    let payments;
    let emailTemplate;
    let totalPurchases = 0;

    if (token.role === "admin") {
      const OR: any[] = [
        { user: { email: { contains: search, mode: "insensitive" } } }
      ];
      if (search.length === 24) {
        OR.push({ userId: search });
        OR.push({ planId: search });
      }

      const whereClause = search ? { OR } : {};

      payments = await db.payment.findMany({
        where: whereClause,
        include: { user: true, plan: true },
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      });
      totalPurchases = await db.payment.count({ where: whereClause });

      emailTemplate = await db.featureSection.findMany({
        select: { emailTitle: true, id: true },
      });
    } else {
      payments = await db.payment.findMany({
        where: { userId: token.sub },
        include: { plan: true },
        orderBy: { createdAt: "desc" },
      });
      totalPurchases = payments.length;
    }

    return NextResponse.json({ payments, emailTemplate, totalPurchases }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error fetching purchases" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  const secret = process.env.AUTH_SECRET;
  const token = await getToken({ req, secret, cookieName: isDevCookies });

  if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  if (token.role !== "admin") {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  try {
    const { paymentId, status } = await req.json();

    if (!paymentId || !status) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const updatedPayment = await db.payment.update({
      where: { id: paymentId },
      data: { status },
      include: { user: true, plan: true },
    });

    return NextResponse.json(
      { message: "Payment status updated", payment: updatedPayment },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error updating payment" }, { status: 500 });
  }
}
