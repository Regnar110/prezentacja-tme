import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ErrorHandlingPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Obsługa Błędów</h1>
        <p className="text-muted-foreground max-w-2xl">
          Next.js oferuje mechanizmy obsługi błędów, pozwalające w prosty sposób
          zarządzać różnymi typami błędów w aplikacji.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Error Boundary</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm bg-muted p-4 rounded-lg">
{`// app/error.tsx
'use client'

export default function Error({
  error,
}: {
  error: Error
}) {
  return (
    <div>
      <h2>Coś poszło nie tak!</h2>
    </div>
  )
}`}
            </pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm bg-muted p-4 rounded-lg">
{`// app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h2>404 - Nie znaleziono strony</h2>
      <p>
        Przepraszamy, nie mogliśmy znaleźć szukanej strony.
      </p>
      <Link href="/">Wróć do strony głównej</Link>
    </div>
  )
}

// Użycie w komponencie
import { notFound } from 'next/navigation'

async function getData(id: string) {
  const data = await fetchData(id)
  if (!data) notFound()
  return data
}`}
            </pre>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Global Error Handling</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm bg-muted p-4 rounded-lg">
{`// app/global-error.tsx
'use client'

export default function GlobalError({
  error,
}: {
  error: Error
}) {
  return (
    <html>
      <body>
        <h2>
          Wystąpił nieoczekiwany błąd
        </h2>
      </body>
    </html>
  )
}`}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}