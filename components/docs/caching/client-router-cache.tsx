export default function ClientRouterCache() {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-purple-50 rounded-lg">
        <h3 className="font-semibold mb-2">Client Router Cache</h3>
        <p className="text-sm text-muted-foreground">
          Tymczasowy cache przeglądarki przechowujący strony podczas nawigacji.
          Poprawia wrażenia z nawigacji i zapewnia płynne przejścia między stronami.
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-white p-4 rounded-md border">
          <h4 className="font-medium mb-2">Jak to działa?</h4>
          <ul className="space-y-2 text-sm">
            <li>• Przechowuje wyrenderowane stron w pamięci przeglądarki (Client Ruter Cache)</li>
            <li>• Działa tylko podczas sesji przeglądania</li>
            <li>• Obsługuje prefetching dla szybszej nawigacji</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-md border">
          <h4 className="font-medium mb-2">Przykład użycia</h4>
          <pre className="text-sm bg-gray-50 p-3 rounded">
            {`"use client"

            import { useRouter } from 'next/navigation'

            export default function Navigation() {
              const router = useRouter()

              return (
                <div>
                  {/* Prefetch automatycznie cachuje stronę */}
                  <Link href="/products" prefetch>
                    Produkty
                  </Link>

                  {/* Ręczne zarządzanie cachem */}
                  <button onClick={() => {
                    router.refresh() // Odświeża cache
                  }}>
                    Odśwież dane
                  </button>
                </div>
              )
            }`}
          </pre>
        </div>

        <div className="bg-muted p-4 rounded-lg">
          <div className="text-sm">
            <strong>Kiedy używać:</strong>
            <ul className="mt-2 space-y-1">
              <li>• Dla poprawy wydajności nawigacji między stronami</li>
              <li>• Gdy chcesz zachować stan komponentów podczas nawigacji</li>
              <li>• W aplikacjach z częstą nawigacją między stronami</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}