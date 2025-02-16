export default function RouteCaching() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="p-4 bg-green-50 rounded-lg">
          <h3 className="font-semibold mb-2">Przykłady Konfiguracji Cachowania Tras</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-md">
              <p className="font-medium mb-2">1. Domyślne cachowanie (statyczne)</p>
              <pre className="text-sm bg-gray-50 p-2 rounded">
                {`// app/page.tsx
export default function Page() {
  // Automatycznie cachowane
}`}
              </pre>
            </div>

            <div className="bg-white p-4 rounded-md">
              <p className="font-medium mb-2">2. Wyłączenie cachowania</p>
              <pre className="text-sm bg-gray-50 p-2 rounded">
                {`// app/dynamic/page.tsx
export const dynamic = 'force-dynamic'
export default function Page() {
  // Brak cachowania
}`}
              </pre>
            </div>

            <div className="bg-white p-4 rounded-md">
              <p className="font-medium mb-2">3. Cachowanie z rewalidacją</p>
              <pre className="text-sm bg-gray-50 p-2 rounded">
                {`// app/revalidate/page.tsx
export const revalidate = 60 // sekundy
export default function Page() {
  // Cache odświeżany co 60s
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-muted p-4">
        <div className="text-sm">
          <strong>Jak działa cachowanie tras:</strong>
          <ul className="mt-2 space-y-1">
            <li>• Domyślnie wszystkie trasy są statycznie renderowane i cachowane</li>
            <li>• Można wymusić dynamiczne renderowanie używając force-dynamic</li>
            <li>• Revalidate określa jak często cache powinien być odświeżany</li>
            <li>• Można użyć generateStaticParams dla dynamicznych tras</li>
            <li>• Cache jest przechowywany na poziomie CDN i serwera</li>
          </ul>
        </div>
      </div>
    </div>
  )
}