import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MiddlewarePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Middleware</h1>
        <p className="text-muted-foreground max-w-2xl">
          Middleware w Next.js pozwala na przechwytywanie i modyfikowanie żądań
          przed ich obsłużeniem. Jest idealny do implementacji autoryzacji,
          przekierowań i modyfikacji odpowiedzi.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Podstawowy Middleware</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm bg-muted p-4 rounded-lg">
{`// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Sprawdź token autoryzacji
  const token = request.cookies.get('token')

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}`}
            </pre>
            <div className="mt-4 text-sm text-muted-foreground">
              <p><strong>Możliwości middleware:</strong></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Przekierowania (możliwe do wykorzystania np. przy obsłudze wersj jezykowych na stronie)</li>
                <li>Modyfikacja nagłówków np. generowanie nagłówków CSP dla każde strony</li>
                <li>Odczytywanie danych z http cookies</li>
                <li>Walidacja sesji</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Przykład bardziej zaawansowanego użycia</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm bg-muted p-4 rounded-lg">
{`import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Geolokalizacja
  const country = request.geo?.country || 'US'
  
  // Modyfikacja odpowiedzi
  const response = NextResponse.next()
  
  // Dodaj customowe nagłówki
  response.headers.set('x-country', country)
  
  // Ustaw cookie
  response.cookies.set('locale', country)
  
  // Warunkowe przekierowanie na inny route ze zmianą w URL
  if (country === 'PL') {
    return NextResponse.redirect(
      new URL('/pl' + request.nextUrl.pathname, request.url)
    )
  }
  
  return response
}`}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}