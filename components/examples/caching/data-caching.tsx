import { unstable_cache } from "next/cache"

async function getCachedData() {
  const getData = unstable_cache(
    async () => {
      // Symulacja pobierania danych
      await new Promise(resolve => setTimeout(resolve, 1000))
      return {
        timestamp: new Date().toISOString(),
        data: "Przykładowe dane z cache"
      }
    },
    ["example-cache-key"],
    {
      revalidate: 60, // Odświeżaj co 60 sekund
      tags: ["example-data"]
    }
  )

  return getData()
}

export default async function DataCaching() {
  const data = await getCachedData()

  return (
    <div className="space-y-6">
      <div className="p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold mb-2">Przykład Cachowania Danych</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Dane zostały pobrane i zbuforowane używając unstable_cache.
          Cache będzie ważny przez 60 sekund.
        </p>

        <div className="bg-white p-4 rounded-md">
          <p><strong>Timestamp:</strong> {data.timestamp}</p>
          <p><strong>Dane:</strong> {data.data}</p>
        </div>
      </div>

      <div className="rounded-lg bg-muted p-4">
        <div className="text-sm">
          <strong>Jak działa cachowanie danych:</strong>
          <ul className="mt-2 space-y-1">
            <li>• Używa unstable_cache do buforowania wyników funkcji</li>
            <li>• Pozwala na ustawienie czasu ważności cache (revalidate)</li>
            <li>• Wspiera tagi do selektywnego unieważniania cache</li>
            <li>• Automatycznie deduplikuje równoczesne żądania</li>
            <li>• Cache jest współdzielony między wszystkimi instancjami</li>
          </ul>
        </div>
      </div>
    </div>
  )
}