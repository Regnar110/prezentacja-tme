import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface GenerateStaticParamsPageType {
  params: Promise<{
    quoteId: string;
  }>
}

export const generateStaticParams = () => {
  return [
    {
      quoteId: '1',
    },
    {
      quoteId: '2'
    }
  ];
}

const getQuoteById = async (quouteId: string) => {
  const res = await fetch(`https://dummyjson.com/quotes/${quouteId}`);
	return res.json();
}

export default async function generateStaticParamsPage({ params }: GenerateStaticParamsPageType) {
  const { quoteId } = await params;
  const { quote, author } = await getQuoteById(quoteId);

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Funkcja generateStaticParams()</h1>
        <p className="text-muted-foreground max-w-2xl">
          Funkcja generateStaticParams może być używana w połączeniu z dynamicznymi ścieżkami,
          aby statycznie generować strony w czasie budowania aplikacji,
          zamiast na żądanie w momencie wykonywania zapytania o zasób strony.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Wykorzysania funkcji generateStaticParams</CardTitle>
        </CardHeader>
        <CardContent>
          <blockquote className="border-l-4 border-primary pl-4 italic">
            {quote}
            <footer className="mt-2 text-sm text-muted-foreground">
              — {author}
            </footer>
          </blockquote>
          <div className="rounded-lg bg-muted p-4 mt-2 mb-2 border-orange-500">
              <p className="text-sm">
                <strong>Jak to działa:</strong> Podstrony z dynamicznym segmentem o wartościach 1 i 2 są generowane statycznie
                co sprawi, że strony z tymi segmentami w URL załadują się niemalże natychmiastowo. Strony z pozostałymi
                wartościami dynamicznycm segmentów dalej będą łądować sie w sposób dynamiczny ( na żądanie )
              </p>
            </div>
          <pre className="text-sm bg-muted p-4 rounded-lg">
              {`// Interfejs strony - params jest asynchroniczne!
interface GenerateStaticParamsPageType {
  params: Promise<{
    quoteId: string;
  }>
}

// Generujemy statyczne wartości w trkacie budowania się aplikacji
// W tym wypadku strony z quoteId 1 i 2 będą wygenerowane statycznie.
// Strony z pozostałymi quoteId (np. 3, 4, itd...) pozostaną wygenerowane dynamicznie
export const generateStaticParams = () => {
  return [
    {
      quoteId: '1',
    },
    {
      quoteId: '2'
    }
  ];
}

const getQuoteById = async (quouteId: string) => {
  const res = await fetch('https://dummyjson.com/quotes/&{quoteId}');
	return res.json();
}

// Asynchroniczny komponent serwerowy
export default async function generateStaticParamsPage({ params }: GenerateStaticParamsPageType) {
  const { quoteId } = await params;
  const { quote, author } = await getQuoteById(quoteId);

  return (
    <span>{quote} -- {author}</span>
  )
}
`}
          </pre>
        </CardContent>
      </Card>
    </div>
  )
}
