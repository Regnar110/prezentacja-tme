import { Suspense } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export const dynamic = 'force-dynamic';

async function getData(timeout: number, tag: string) {
  await new Promise(resolve => setTimeout(resolve, timeout))
  const response = await fetch(`https://api.adviceslip.com/advice/${(Math.floor(Math.random() * 80) + 1).toString()}`,{
    cache: 'force-cache',
    next: {
      tags: [tag]
    }
  })
  const data = await response.json()
  return data
}

async function SlowComponent() {
  const { slip } = await getData(3000, '1');

  return (
    <Card>
    <CardHeader>
      <CardTitle>Porada dnia opóźniona o 3 sekundy</CardTitle>
    </CardHeader>
    <CardContent>
      <blockquote className="border-l-4 border-primary pl-4 italic">
        {slip.advice}
      </blockquote>
    </CardContent>
  </Card>
  )
}

async function MediumComponent() {
  const { slip } = await getData(2000, '2');

  return (
    <Card>
    <CardHeader>
      <CardTitle>Porada dnia opóźniona o 2 sekundy</CardTitle>
    </CardHeader>
    <CardContent>
      <blockquote className="border-l-4 border-primary pl-4 italic">
        {slip.advice}
      </blockquote>
    </CardContent>
  </Card>
  )
}

async function FastComponent() {
  const { slip } = await getData(1000, '3');

  return (
    <Card>
    <CardHeader>
      <CardTitle>Porada dnia opóźniona o 1 sekundę</CardTitle>
    </CardHeader>
    <CardContent>
      <blockquote className="border-l-4 border-primary pl-4 italic">
        {slip.advice}
      </blockquote>
    </CardContent>
  </Card>
  )
}

function LoadingCard() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-[200px]" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full" />
      </CardContent>
    </Card>
  )
}

export default function StreamingPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Renderowanie strumieniowe</h1>
        <p className="text-muted-foreground max-w-2xl">
          Na tej stronie zastosowany został Streaming co w połączeniu z komponentem Suspense pozwoliło na
          progresywne ładowanie komponentów. Dzięki tej strategii renderowania umozliwiamy użytkownikowi interakcję
          z aplikacją zanim wszystkie komponenty się wyrenderują.
        </p>
      </div>

      <div className="grid gap-6">
        <Suspense fallback={<LoadingCard />}>
          <FastComponent />
        </Suspense>

        <Suspense fallback={<LoadingCard />}>
          <MediumComponent />
        </Suspense>

        <Suspense fallback={<LoadingCard />}>
          <SlowComponent />
        </Suspense>
      </div>

      <div className="rounded-lg bg-muted p-4">
        <p className="text-sm">
          <strong>Jak to działa:</strong>
          Każdy komponent ma inny czas ładowania, ale strona
          staje się interaktywna od razu po wejściu na nią.
          Komponenty są przesyłane strumieniowo od razu jak są gotowe (wyrenderowane), zapewniając
          lepsze wrażenia użytkownika niż czekanie, aż wszystko załaduje się na raz.
        </p>
      </div>
    </div>
  )
}