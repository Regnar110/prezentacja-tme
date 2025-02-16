export const dynamic = 'force-dynamic';

export default async function DataCachePlayground() {
	await fetch('http://localhost:3000/api', {
		cache: 'force-cache',
		next: {
			tags: ['Data-Cache-Playground-API-Call']
		}
	})

	return (
		<div>
			{'Ten komponent odpytuje się o dane z next API. Są one przechowywane między wystawieniami aplikacji'}
		</div>
	)
}