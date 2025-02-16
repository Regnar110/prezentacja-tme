export default function ISRExample() {
	return (
	  <div className="space-y-6">
		<div className="space-y-4">
		  <div className="bg-blue-50 p-4 rounded-lg">
			<h3 className="font-semibold mb-2">Implementacja ISR</h3>
			<p className="text-sm text-muted-foreground">
			  Przykłady różnych sposobów implementacji ISR w Next.js
			</p>
		  </div>
  
		  <div className="space-y-4">
			{/* Przykład 1: Podstawowy ISR */}
			<div className="bg-white p-4 rounded-md border">
			  <h4 className="font-medium mb-2">1. Podstawowy ISR z revalidate</h4>
			  <pre className="text-sm bg-gray-50 p-3 rounded">
  {`// app/products/[id]/page.tsx
  export default async function ProductPage({ params }) {
	const product = await fetch(
	  \`https://api.example.com/products/\${params.id}\`,
	  { next: { revalidate: 60 } } // Odświeżaj co 60 sekund
	).then(res => res.json())
  
	return <div>{/* Renderowanie produktu */}</div>
  }`}</pre>
			</div>
  
			{/* Przykład 2: On-demand Revalidation */}
			<div className="bg-white p-4 rounded-md border">
			  <h4 className="font-medium mb-2">2. Rewalidacja na żądanie</h4>
			  <pre className="text-sm bg-gray-50 p-3 rounded">
  {`// app/api/revalidate/route.ts
  import { revalidatePath, revalidateTag } from 'next/cache'
  import { NextRequest } from 'next/server'
  
  export async function POST(request: NextRequest) {
	const path = request.nextUrl.searchParams.get('path')
	const tag = request.nextUrl.searchParams.get('tag')
  
	if (path) {
	  revalidatePath(path)
	  return Response.json({ revalidated: true, path })
	}
  
	if (tag) {
	  revalidateTag(tag)
	  return Response.json({ revalidated: true, tag })
	}
  
	return Response.json({ message: 'Missing path or tag' }, { status: 400 })
  }`}</pre>
			</div>
  
			{/* Przykład 3: Segmentowane ISR */}
			<div className="bg-white p-4 rounded-md border">
			  <h4 className="font-medium mb-2">3. Segmentowane ISR</h4>
			  <pre className="text-sm bg-gray-50 p-3 rounded">
  {`// app/products/layout.tsx
  export default function ProductsLayout({ children }) {
	return <div>{children}</div>
  }
  
  // Różne czasy rewalidacji dla różnych segmentów
  export const revalidate = 3600 // 1 godzina
  
  // app/products/[category]/page.tsx
  export const revalidate = 300 // 5 minut`}</pre>
			</div>
  
			{/* Przykład 4: Time-based Revalidation */}
			<div className="bg-white p-4 rounded-md border">
			  <h4 className="font-medium mb-2">4. Rewalidacja oparta na czasie</h4>
			  <pre className="text-sm bg-gray-50 p-3 rounded">
  {`// app/dashboard/page.tsx
  async function getData() {
	const res = await fetch('https://api.example.com/stats', {
	  next: { 
		revalidate: 60,      // Standardowa rewalidacja co minutę
		tags: ['dashboard']  // Tag do rewalidacji na żądanie
	  }
	})
	return res.json()
  }
  
  export default async function Dashboard() {
	const data = await getData()
	return <div>{/* Renderowanie danych */}</div>
  }`}</pre>
			</div>
		  </div>
  
		  <div className="bg-muted p-4 rounded-lg">
			<p className="text-sm">
			  <strong>Najlepsze praktyki:</strong>
			  <ul className="mt-2 space-y-1">
				<li>• Używaj odpowiednich czasów rewalidacji dla różnych typów treści</li>
				<li>• Implementuj rewalidację na żądanie dla krytycznych aktualizacji</li>
				<li>• Grupuj podobne treści używając tagów rewalidacji</li>
				<li>• Monitoruj wydajność i dostosowuj czasy rewalidacji</li>
			  </ul>
			</p>
		  </div>
		</div>
	  </div>
	)
  }