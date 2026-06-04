"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useRouter, usePathname, useSearchParams } from "next/navigation"

interface AdminFinalPurchaseProps {
  purchases: any[];
  totalPurchases: number;
  purchasePage: number;
  errors: any[];
  totalErrors: number;
  errorPage: number;
  tab: string;
}

export default function AdminFinalPurchase({
  purchases,
  totalPurchases,
  purchasePage,
  errors,
  totalErrors,
  errorPage,
  tab
}: AdminFinalPurchaseProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", value);
    router.push(`${pathname}?${params.toString()}`);
  }

  const handlePurchasePage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("purchasePage", newPage.toString());
    router.push(`${pathname}?${params.toString()}`);
  }

  const handleErrorPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("errorPage", newPage.toString());
    router.push(`${pathname}?${params.toString()}`);
  }

  const pageSize = 50;
  const totalPurchasePages = Math.ceil(totalPurchases / pageSize) || 1;
  const totalErrorPages = Math.ceil(totalErrors / pageSize) || 1;

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        <Tabs value={tab} onValueChange={handleTabChange}>
          <TabsList className="mb-4">
            <TabsTrigger value="purchases">Successful Purchases</TabsTrigger>
            <TabsTrigger value="errors">Failed Emails (Errors)</TabsTrigger>
          </TabsList>

          <TabsContent value="purchases">
            <Card>
              <CardHeader>
                <CardTitle>Final Purchases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>To</TableHead>
                        <TableHead>License Key</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {purchases.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={4} className="text-center py-6 text-muted-foreground">No purchases found.</TableCell>
                        </TableRow>
                      )}
                      {purchases.map(p => (
                        <TableRow key={p.id}>
                          <TableCell>{p.to}</TableCell>
                          <TableCell className="font-mono text-sm">{p.licenseKey}</TableCell>
                          <TableCell>{p.subject}</TableCell>
                          <TableCell>{new Date(p.createdAt).toLocaleDateString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm text-muted-foreground">
                    Showing {purchases.length > 0 ? (purchasePage - 1) * pageSize + 1 : 0} to {Math.min(purchasePage * pageSize, totalPurchases)} of {totalPurchases} purchases.
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled={purchasePage <= 1} onClick={() => handlePurchasePage(purchasePage - 1)}>Previous</Button>
                    <Button variant="outline" size="sm" disabled={purchasePage >= totalPurchasePages} onClick={() => handlePurchasePage(purchasePage + 1)}>Next</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="errors">
            <Card>
              <CardHeader>
                <CardTitle>Failed Email Sends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User Email</TableHead>
                        <TableHead>Template Name</TableHead>
                        <TableHead>License Key</TableHead>
                        <TableHead>Error</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {errors.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center py-6 text-muted-foreground">No errors found.</TableCell>
                        </TableRow>
                      )}
                      {errors.map(err => (
                        <TableRow key={err.id}>
                          <TableCell>{err.user?.email || err.userId}</TableCell>
                          <TableCell>{err.emailTemplate?.emailTitle || err.emailTempId}</TableCell>
                          <TableCell className="font-mono text-sm">{err.licenseKey}</TableCell>
                          <TableCell className="text-red-500 max-w-[200px] truncate" title={err.error}>{err.error}</TableCell>
                          <TableCell>{new Date(err.createdAt).toLocaleDateString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm text-muted-foreground">
                    Showing {errors.length > 0 ? (errorPage - 1) * pageSize + 1 : 0} to {Math.min(errorPage * pageSize, totalErrors)} of {totalErrors} errors.
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled={errorPage <= 1} onClick={() => handleErrorPage(errorPage - 1)}>Previous</Button>
                    <Button variant="outline" size="sm" disabled={errorPage >= totalErrorPages} onClick={() => handleErrorPage(errorPage + 1)}>Next</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
