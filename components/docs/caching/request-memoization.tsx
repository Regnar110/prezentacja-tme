export default function RequestMemoization() {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold mb-2">Request Memoization</h3>
        <p className="text-sm text-muted-foreground">
          Mechanizm automatycznej memoizacji żądań w ramach pojedynczego renderowania strony.
          Zapewnia deduplikację żądań i optymalizację wydajności podczas renderowania.
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-white p-4 rounded-md border">
          <h4 className="font-medium mb-2">Jak to działa?</h4>
          <ul className="space-y-2 text-sm">
            <li>• Automatycznie deduplikuje identyczne żądania fetch podczas renderowania</li>
            <li>• Działa w ramach pojedynczego renderowania strony</li>
            <li>• Nie wymaga dodatkowej konfiguracji - React zmemoizuje to co się da celem optymalizacji w procesie renderowania</li>
            <li>• Optymalizuje wydajność i zmniejsza obciążenie zewnętrznych API</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-md border">
          <h4 className="font-medium mb-2">Przykład użycia</h4>
          <pre className="text-sm bg-gray-50 p-3 rounded">
            {`// Przykład memoizacji żądań
            async function getData() {
              const res = await fetch('https://api.example.com/data')
              return res.json()
            }

            // Te komponenty współdzielą to samo żądanie
          
            async function ProductPage() {
              const data = await getData() // Pierwsze żądanie
              return (
                <>
                  <Header data={data} /> // Pobiera te same dane co ProductPage
                </>
              )
            }
            
            async function Header() {
              const theSameData = await getData() // drugie takie samo żądanie co u rodzica

              return (
                <span>{data.text}</span>
              )
            }
            `}
          </pre>
        </div>

        <div className="bg-muted p-4 rounded-lg">
          <div className="text-sm">
            <strong>Kiedy używać:</strong>
            <ul className="mt-2 space-y-1">
              <li>• Gdy wiele komponentów serwerowych na stronie potrzebuje tych samych danych</li>
              <li>• Dla optymalizacji wydajności podczas renderowania po stronie serwera</li>
              <li>• Gdy chcesz uniknąć duplikacji żądań do zewnętrznych API w trakcie renderowania aplikacji</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}