import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

async function getData(adviceId: string) {
  const response = await fetch(`https://api.adviceslip.com/advice/${adviceId}`)
  const data = await response.json()
  return data
}

export default async function DynamicPage({ params }: { params: Promise<{ adviceId: string }>}) {
    const { adviceId } = await params;
    const { slip } = await getData(adviceId)

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Renderowanie Dynamiczne</h1>
        <p className="text-muted-foreground max-w-2xl">
          Ta strona jest renderowana dynamicznie przy każdym żądaniu. Treść zmienia się przy każdym odświeżeniu,
          demonstrując pobieranie danych w czasie rzeczywistym.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Dynamiczna losowa porada dnia</CardTitle>
        </CardHeader>
        <CardContent>
          <blockquote className="border-l-4 border-primary pl-4 italic">
            {slip.advice}
          </blockquote>
        </CardContent>
      </Card>

      <div className="rounded-lg bg-muted p-4">
        <p className="text-sm">
          <strong>Jak to działa:</strong> Ta strona pobiera nowe dane przy każdym żądaniu. Odśwież stronę, aby zobaczyć nowy cytat. To podejście jest idealne dla 
          stron, które muszą prezentować zawsze aktualne dane lub dane..
        </p>
      </div>
    </div>
  )
}