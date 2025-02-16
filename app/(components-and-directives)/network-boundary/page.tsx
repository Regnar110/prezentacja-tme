import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import NetworkBoundaryExample from "@/components/examples/network-boundary/network-boundary"

export default function NetworkBoundaryPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Network boundary i dyrektywy</h1>
        <p className="text-muted-foreground max-w-2xl">
          Network boundary (Granica sieciowa) w Next.js występuje między środowiskiem serwerowym a klienckim.
          Zrozumienie jej pomocne jest przy definiowaniu dyrektyw &apos;use client&apos; i &apos;use server&apos;
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Przykłady użycia dyrektyw w kontekście Network boundary</CardTitle>
        </CardHeader>
        <CardContent>
          <NetworkBoundaryExample />
        </CardContent>
      </Card>
    </div>
  )
}