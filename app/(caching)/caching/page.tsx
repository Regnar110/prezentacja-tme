import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import RequestMemoization from "@/components/docs/caching/request-memoization"
import ClientRouterCache from "@/components/docs/caching/client-router-cache"
import FullRouteCache from "@/components/docs/caching/full-route-cache"
import DataCache from "@/components/docs/caching/data-cache"

export default function CachingDocsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Mechanizmy cachowania w Next.js</h1>
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Request Memoization</CardTitle>
          </CardHeader>
          <CardContent>
            <RequestMemoization />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Client Router Cache</CardTitle>
          </CardHeader>
          <CardContent>
            <ClientRouterCache />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Full Route Cache</CardTitle>
          </CardHeader>
          <CardContent>
            <FullRouteCache />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Cache</CardTitle>
          </CardHeader>
          <CardContent>
            <DataCache />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}