import { auth } from "@/auth";
import AdminFinalPurchase from "@/components/admin-final-purchase";
import { db } from "@/db";
import { redirect } from "next/navigation";

export default async function FinalPurchasePage({
  searchParams,
}: {
  searchParams: Promise<{ purchasePage?: string; errorPage?: string; tab?: string }>
}) {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  const params = await searchParams;
  const purchasePage = parseInt(params.purchasePage || "1");
  const errorPage = parseInt(params.errorPage || "1");
  const tab = params.tab || "purchases";

  const pageSize = 10;

  // Fetch Purchases
  const purchases = await db.finalPurchase.findMany({
    skip: (purchasePage - 1) * pageSize,
    take: pageSize,
    orderBy: { createdAt: 'desc' }
  });
  const totalPurchases = await db.finalPurchase.count();

  // Fetch Errors
  const errors = await db.finalPurchaseError.findMany({
    skip: (errorPage - 1) * pageSize,
    take: pageSize,
    orderBy: { createdAt: 'desc' }
  });
  const totalErrors = await db.finalPurchaseError.count();

  // Populate user data and email template for errors
  const userIds = errors.map(e => e.userId);
  const templateIds = errors.map(e => e.emailTempId);

  const users = await db.user.findMany({ where: { id: { in: userIds } } });
  const templates = await db.featureSection.findMany({ where: { id: { in: templateIds } } });

  const populatedErrors = errors.map(err => {
    return {
      ...err,
      user: users.find(u => u.id === err.userId) || null,
      emailTemplate: templates.find(t => t.id === err.emailTempId) || null,
    };
  });

  return (
    <AdminFinalPurchase
      purchases={purchases}
      totalPurchases={totalPurchases}
      purchasePage={purchasePage}
      errors={populatedErrors}
      totalErrors={totalErrors}
      errorPage={errorPage}
      tab={tab}
    />
  );
}
