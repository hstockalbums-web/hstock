"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, CreditCard, Package, Receipt } from "lucide-react"

export default function PurchasesPage({ data }: { data: any[] }) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
      case "success":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "pending":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400"
      case "failed":
      case "cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
      default:
        return "bg-secondary text-secondary-foreground"
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="mx-auto py-8 px-4 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Purchase History</h1>
        <p className="text-muted-foreground">View and manage your recent purchases</p>
      </div>

      <div className="space-y-6">
        {data?.map((purchase) => (
          <Card key={purchase.id} className="group hover:shadow-lg transition-all duration-200 border">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                    {purchase.plan.logo ? (
                      <img
                        src={purchase.plan.logo || "/placeholder.svg"}
                        alt={purchase.plan.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Package className="w-8 h-8 text-muted-foreground" />
                    )}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-1">{purchase.plan.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{purchase.plan.description}</p>
                    </div>
                    <Badge
                      className={`${getStatusColor(purchase.status)} font-medium px-3 py-1 text-xs uppercase tracking-wide`}
                      variant="secondary"
                    >
                      {purchase.status}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                    <CalendarDays className="w-4 h-4" />
                    <span>Purchased on {formatDate(purchase.createdAt)}</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <Receipt className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Transaction ID</p>
                    <p className="font-mono text-sm font-medium">{purchase.transactionId}</p>
                  </div>
                </div>

                {purchase.referralCode && (
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Referral Code</p>
                      <p className="font-mono text-sm font-medium text-primary">{purchase.referralCode}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2 md:justify-end">
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Total Amount</p>
                    <div className="flex items-center gap-2">
                      {purchase.discount > 0 && (
                        <span className="text-sm text-muted-foreground line-through">
                          {formatCurrency(purchase.amount)}
                        </span>
                      )}
                      <span className="text-lg font-bold text-primary">{formatCurrency(purchase.finalAmount)}</span>
                    </div>
                    {purchase.discount > 0 && (
                      <p className="text-xs text-green-600 dark:text-green-400">
                        Saved {formatCurrency(purchase.discount)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {data.length === 0 && (
        <div className="text-center py-12">
          <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No purchases yet</h3>
          <p className="text-muted-foreground">
            Your purchase history will appear here once you make your first purchase.
          </p>
        </div>
      )}
    </div>
  )
}
