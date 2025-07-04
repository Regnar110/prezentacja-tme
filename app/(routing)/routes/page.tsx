import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {ReactNode} from "react";
import Link from "next/link";

export default function RoutesPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Ścieżki</h1>
        <p className="text-muted-foreground max-w-2xl">
          Next.js oferuje system routingu z obsługą ścieżek statycznych, dynamicznych, równoległych i przerywanych.
        </p>
      </div>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Ścieżki Statyczne</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm bg-muted p-4 rounded-lg">
{`app/
  about/
    page.tsx      # /about
  contact/
    page.tsx      # /contact
  blog/
    page.tsx      # /blog`}
            </pre>
            <div className="mt-4 text-sm text-muted-foreground">
              <p><strong>Cechy ścieżek statycznych:</strong></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Predefiniowane ścieżki URL</li>
                <li>Renderowane statycznie domyślnie</li>
                <li>Najlepsza wydajność i SEO</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ścieżki z dynamicznymi segmentami</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm bg-muted p-4 rounded-lg">
{`// app/blog/[slug]/page.tsx
export default async function BlogPost({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  return <h1>Post: {slug}</h1>
}`}
            </pre>
            <div className="mt-4 mb-4 text-sm text-muted-foreground">
              <p><strong>Typy segmentów dynamicznych:</strong></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>[slug] - Pojedynczy segment dynamiczny</li>
                <li>[...slug] - Catch-all segment np. pages/shop/[...slug]/page.js będzie odpowiadać: /shop/clothes albo /shop/clothes/tops, /shop/clothes/tops/t-shirts itd...</li>
                <li>[[...slug]] - Opcjonalny catch-all segment np. pages/shop/[[...slug]]/page.js będzie odpowiadać /shop albo /shop/clothes, /shop/clothes/tops, /shop/clothes/tops/t-shirts itd...</li>

              </ul>
            </div>
            <Link className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'} href={'/routes/1'}>{'przekieruj do /ROUTES/1'}</Link>
            <Link className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'} href={'/routes/1/2/3'}>{'przekieruj do /ROUTES/1/2/3'}</Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Przechwytywanie ścieżek</CardTitle>
          </CardHeader>
          <CardContent>
            <Link href={"/routes/login"} scroll={false}>
              {'Otwórz formularz logowania w modalu'}
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}