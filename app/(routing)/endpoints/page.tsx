import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ApiRoutesPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Endpointy API</h1>
        <p className="text-muted-foreground max-w-2xl">
          Next.js umożliwia tworzenie endpointów API bezpośrednio w aplikacji poprzez stworzenie
          folderu app z plikiem route.ts.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Podstawowy route API</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm bg-muted p-4 rounded-lg">
{`// app/api/hello/route.ts
export async function GET(response: NextResponse) {
  return response.json({ message: 'Hello World' })
}

export async function POST(request: NextRequest, response: NextResponse) {
  const data = await request.json()
  return response.json({ received: data })
}`}
            </pre>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Dynamiczne routy API</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm bg-muted p-4 rounded-lg">
{`// app/api/posts/[id]/route.ts
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  return Response.json({ id, title: 'Post Title' })
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const data = await request.json()
  return Response.json({ updated: id })
}`}
            </pre>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
          <div className="mt-4 text-sm text-muted-foreground">
            <p><strong>Cechy endpointów API</strong></p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Foldery /api mogą być tworzone pod każdym routem w folderze app podobnie do layout.tsx i page.tsx</li>
              <li>Wspiera metoy HTTP:  GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS</li>
              <li>Te endpointy oferują pełną kontrolę nad nagłówkami,
                formą generowanych odpowiedzi np. możliwość streamowania odpowiedzi, wykorzystanie webhooków itd.</li>
              <li>Wymagają większej uwagi jeżeli chodzi o bezpieczeństwo</li>
            </ul>
          </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}