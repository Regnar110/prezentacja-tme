import { revalidatePathAction } from '@/actions/revalidatePathAction';
import { revalidateTagAction } from '@/actions/revalidateTagAction';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';

// Przykład użycia revalidate
// export const revalidate = 60; // Rewalidacja co 60 sekund

async function getDataOne() {
  const res = await fetch("https://api.adviceslip.com/advice", {
    next: {
		  tags: ["advicesOne"], // Tag do rewalidacji
		  revalidate: 10 // rewalidacja w tle co 10 sekund
	  }
  });
  return res.json();
}

async function getDataTwo() {
	const res = await fetch(`https://dummyjson.com/todos/random`, {
		cache: 'force-cache',
    next: { tags: ["advicesTwo"] }, // Tag do rewalidacji
	});
	return res.json();
}

async function getDataThree() {
	const res = await fetch(`https://dummyjson.com/quotes/random`, {
		cache: 'force-cache',
    next: { tags: ["advicesThree"] }, // Tag do rewalidacji
	});
	return res.json();
}

export default async function ISRPage() {
  const { slip: slipOne } = await getDataOne();
  const { todo, id } = await getDataTwo();
  const { quote, author } = await getDataThree();
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Inkramentalna Statyczna Regeneracja</h1>
        <p className="text-muted-foreground max-w-2xl">
          ISR pozwala na aktualizację statycznie wygenerowanych stron po ich
          wyrenderowaniu w trakcie budowania się aplikacji, łącząc zalety renderowania statycznego z dynamiczną
          aktualizacją treści.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Przykład revalidate */}
        <Card>
          <CardHeader>
            <CardTitle>Revalidate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic">
                {slipOne.advice}
                <footer className="mt-2 text-sm text-muted-foreground">
                  — {'Paulo Coelho'}
                </footer>
              </blockquote>
              <pre className="text-sm bg-muted p-4 rounded-lg">
                {`// Rewalidacja na poziomie strony
export const revalidate = 60 // rewalidacja całej strony co 60 sekund

// LUB rewalidacja zapytania(lub grupy zapytań) po tagu
async function getDataOne() {
  const res = await fetch("https://api.adviceslip.com/advice", {
    next: {
		revalidate: 10 // rewalidacja zapytania w tle co 10 sekund
	}
  });
  return res.json();
}`}
              </pre>
            </div>
            <div className="rounded-lg bg-muted p-4 mt-2">
              <p className="text-sm">
                <strong>Jak to działa:</strong> Revalidate może zostać umieszczona nad komponentem strony celem rewalidacji
                całej strony, albo granularnie przy każdym zapytaniu z użyciem fetch().
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Przykład revalidatePath */}
        <Card>
          <CardHeader>
            <CardTitle>2. revalidatePath</CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="border-l-4 border-primary pl-4 italic">
              {todo}
              <footer className="mt-2 text-sm text-muted-foreground">
                — {`TODO id: ${id}`}
              </footer>
            </blockquote>
            <pre className="text-sm bg-muted p-4 rounded-lg">
              {`// app/api/revalidate/route.ts
// Route API

import { revalidatePath } from 'next/cache'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path')
  
  if (!path) {
    return Response.json(
      { error: 'Path is required' }, 
      { status: 400 }
    )
  }

  revalidatePath(path)
  return Response.json({ revalidated: true, path })
}

// LUB w akcji serwerowej
'use server'

import { revalidatePath } from 'next/cache'

export const revalidatePathAction = async (path:string) => {
  revalidatePath(path)
}`}
            </pre>
            <Button actionProp={'/isr'} action={revalidatePathAction}>Rewaliduj cały route</Button>
            <div className="rounded-lg bg-muted p-4 mt-2">
              <p className="text-sm">
                <strong>Jak to działa:</strong> revalidatePath() jest funkcją, która może zostać wykonana po stronie serwera.
                Pozwala ona na rewalidację całej ścieżki w tle.
                Na ten moment, użycie tej funkcji rewaliduje Client Router Cache (to ma ulec w poźniejszym czasie zmianie) oraz
                Full Route Cache po stronie serwera.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Przykład revalidateTag */}
        <Card>
          <CardHeader>
            <CardTitle>3. revalidateTag</CardTitle>
          </CardHeader>
          <CardContent>
		  	      <blockquote className="border-l-4 border-primary pl-4 italic">
                {quote}
                <footer className="mt-2 text-sm text-muted-foreground">
                  — {author}
                </footer>
              </blockquote>
            <pre className="text-sm bg-muted p-4 rounded-lg">
              {`// Oznaczanie danych tagiem
async function getDataThree() {
	const res = await fetch("https://api.adviceslip.com/advice", {
		next: { tags: ["advicesThree"] }
	});
	return res.json();
}

// Rewalidacja po tagu w akcji serwerowej
// ./actions/revalidateOnServerAction.ts

'use server'
import { revalidateTag } from 'next/cache'

export const revalidateTagAction = async (tag: string) => {
	revalidateTag(tag);
}`}
            </pre>
			    <Button actionProp={'advicesThree'} action={revalidateTagAction}>Rewaliduj dane zapytania na serwerze</Button>
          <div className="rounded-lg bg-muted p-4 mt-2">
            <p className="text-sm">
              <strong>Jak to działa:</strong> Dane w Data Cache mogą być grupowane za pomocą tagów ( które swoją drogą przypominają queryKey w react-query).
              Dzięki tym tagom i funkcji revalidateTag() możemy rewalidować dane zapisane w Data Cache, które mają dopisany do siebie konkretny tag/tagi.
              W efekcie tej rewalidacji dane w cache sie wyczyszczą a kolejne zapytanie zapisze w nim świeże dane.
            </p>
          </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
