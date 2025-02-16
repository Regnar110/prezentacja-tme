import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

async function getData() {
  const response = await fetch('https://api.adviceslip.com/advice')
  const data = await response.json()
  return data
}

export default async function StaticPage() {

  const { slip } = await getData();

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Renderowanie Statyczne</h1>
        <p className="text-muted-foreground max-w-2xl">
          Ta strona jest renderowana statycznie w trakcie budowania aplikacji. Treść pozostaje taka sama do następnego builda
          albo do następnej rewalidacji danych w drodze ISR (Incramental Static Regeneration).
          Ta strategia renderowania sprawdzi się idealnie przy stronach contentowych, gdzie dane nie zmieniają się często.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Statyczna losowa porada dnia</CardTitle>
        </CardHeader>
        <CardContent>
          <blockquote className="border-l-4 border-primary pl-4 italic">
            {slip.advice}
          </blockquote>
        </CardContent>
      </Card>

      <div className="rounded-lg bg-muted p-4">
        <p className="text-sm">
          <strong>Jak to działa:</strong> Ta strona jest generowana w czasie budowania aplikacji. Dzieki temu
          żądanie użytkownika o tego rodzaju strone nie musi przechodzić procesu renderowania. Treść strony jest dostarczana
          bezpośrednio z cache po stronie serwera (Full Router Cache).
        </p>
      </div>
    </div>
  )
}