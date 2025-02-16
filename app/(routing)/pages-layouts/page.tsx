import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PagesLayoutsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Strony i Layouty</h1>
        <p className="text-muted-foreground max-w-2xl">
          W Next.js dostepny jest system routingu oparty na systemie plików,
          z zaawansowaną obsługą layoutów i zagnieżdżonych stron.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Przykładowa struktura</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm bg-muted p-4 rounded-lg">
{`app/
  layout.tsx      # Layout główny
  page.tsx        # Strona główna
  about/
    layout.tsx    # Layout dla sekcji about
    page.tsx      # Strona about
    team/
      page.tsx    # Strona team`}
            </pre>
            <div className="mt-4 text-sm text-muted-foreground">
              <p><strong>Jak to działa:</strong></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Każdy folder reprezentuje segment URL</li>
                <li>page.tsx definiuje interfejs strony</li>
                <li>layout.tsx zapewnia wspólny układ dla zagnieżdżonych stron</li>
                <li>Layouty można zagnieżdżać w sobie</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Przykład Layoutu</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm bg-muted p-4 rounded-lg">
{`// app/layout.tsx -- RootLayout
export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pl">
      <body>
        <nav>
          {/* Nawigacja współdzielona między stronami */}
        </nav>
        <main>
          {children}
        </main>
        <footer>
          {/* Stopka współdzielona między stronami */}
        </footer>
      </body>
    </html>
  )
}`}
            </pre>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Przykład Strony</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm bg-muted p-4 rounded-lg">
{`// app/about/page.tsx

export default function AboutPage() {
  return (
    <div>
      <h1>O nas</h1>
      <p>Treść strony o nas...</p>
    </div>
  )
}`}
            </pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Grupowanie Tras</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm bg-muted p-4 rounded-lg">
{`app/
  (marketing)/
    about/
      page.tsx
    contact/
      page.tsx
  (shop)/
    products/
      page.tsx
    cart/
      page.tsx`}
            </pre>
            <div className="mt-4 text-sm text-muted-foreground">
              <p><strong>Korzyści grupowania ścieżek:</strong></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Organizacja kodu bez wpływu na URL</li>
                <li>Rozdzielenie różnych sekcji aplikacji</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}