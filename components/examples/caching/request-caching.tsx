async function fetchWithCache() {
  const res = await fetch("https://api.adviceslip.com/advice", {
    next: {
      revalidate: 30, // Cache na 30 sekund
      tags: ["quotes"]
    }
  })
  
  return res.json()
}

export default async function RequestCaching() {
  const { slip } = await fetchWithCache()

  return (
    <div className="space-y-6">
      <div className="p-4 bg-purple-50 rounded-lg">
        <h3 className="font-semibold mb-2">Przykład Cachowania Żądań</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Żądanie HTTP jest cachowane przez 30 sekund używając opcji fetch.
        </p>

        <div className="bg-white p-4 rounded-md">
          <blockquote className="border-l-4 border-primary pl-4 italic">
            {slip.advice}
          </blockquote>
          <p className="mt-2 text-sm text-muted-foreground">— ~{'Paulo Coelo'}</p>
        </div>
      </div>

      <div className="rounded-lg bg-muted p-4">
        <p className="text-sm">
          <strong>Jak działa cachowanie żądań:</strong>
          <ul className="mt-2 space-y-1">
            <li>• Używa rozszerzonej konfiguracji fetch w Next.js</li>
            <li>• Pozwala na ustawienie czasu ważności cache per żądanie</li>
            <li>• Wspiera tagi do selektywnego unieważniania cache</li>
            <li>• Automatycznie deduplikuje równoczesne żądania</li>
            <li>• Działa z dowolnymi endpointami HTTP</li>
          </ul>
        </p>
      </div>
    </div>
  )
}