import ClientComponent from "@/components/examples/client-component"
import ServerComponent from "@/components/examples/server-component"
import NestedComponents from "@/components/examples/nested-components"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ComponentsPage() {

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Komponenty Serwerowe i Klienckie</h1>
        <p className="text-muted-foreground max-w-2xl">
          Przykłady komponentów serwerowych i klienckich oraz ich zagnieżdżania.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Komponent Serwerowy</CardTitle>
          </CardHeader>
          <CardContent>
            <ServerComponent />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Komponent Kliencki</CardTitle>
          </CardHeader>
          <CardContent>
            <ClientComponent />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Komponenty Zagnieżdżone</CardTitle>
          </CardHeader>
          <CardContent>
            <NestedComponents />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}