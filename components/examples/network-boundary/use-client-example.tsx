import ServerDataComponent from "./server-data"

export default function UseClientExample() {
  return (
    <div className="space-y-4">
      <div className="p-4 bg-yellow-50 rounded-lg">
        <h3 className="font-semibold mb-2">Przykład użycia &apos;use client&apos;</h3>
        <p className="text-sm text-muted-foreground">
          Poniżej znajduje się przykład interakcji między komponentem serwerowym a klienckim.
          Komponent serwerowy przekazuje dane do komponentu klienckiego, który oznaczony jest dyrektywą &apos;use client&apos;.
          Miejsce w którym umieszczony jest komponent kliencki z tą dyrektywą określa się granicą sieci czyli Network Boundary.
          Dane przekazywane przez tą granicę muszą być serializowalne.
          O tej dyrektywie można również myśleć jak o furtce dla środowiska serwerowgo do środowiska klienckiego.
        </p>
      </div>

      <ServerDataComponent />
    </div>
  )
}