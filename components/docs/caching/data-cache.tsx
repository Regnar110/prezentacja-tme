export default function DataCache() {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-yellow-50 rounded-lg">
        <h3 className="font-semibold mb-2">Data Cache</h3>
        <p className="text-sm text-muted-foreground">
          Trwały cache danych po stronie serwera. Przechowuje wyniki 
          zapytań fetch i innych operacji pobierania danych.
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-white p-4 rounded-md border">
          <h4 className="font-medium mb-2">Jak to działa?</h4>
          <ul className="space-y-2 text-sm">
            <li>• Przechowuje wyniki zapytań fetch na serwerze</li>
            <li>• Wspiera rewalidację czasową i na żądanie(revalidate i revalidateTag)</li>
            <li>• Pozwala na grupowanie zapisanych danych przy użyciu tagów</li>
            <li>• Działa niezależnie od mechanizmów cachujących strony</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-md border">
          <h4 className="font-medium mb-2">Przykład użycia</h4>
          <pre className="text-sm bg-gray-50 p-3 rounded">
            {`
            async function getData() {
              const res = await fetch('https://api.example.com/data', {
                next: {
                  revalidate: 3600, // Rewalidacja tego zapytania co 1 godzinę
                  tags: ['products']  // Tag dla grupowania
                }
              })
              return res.json()
            }

            // Rewalidacja na żądanie
            import { revalidateTag } from 'next/cache'

            async function updateProduct() {
              'use server'
              await updateDB()
              revalidateTag('products') // Odświeża cache
            }`}
          </pre>
        </div>

        <div className="bg-muted p-4 rounded-lg">
          <div className="text-sm">
            <strong>Kiedy używać:</strong>
            <ul className="mt-2 space-y-1">
              <li>• Dla danych, które zmieniają się rzadko</li>
              <li>• Dla danych współdzielonych między wieloma stronami</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}