export default async function Route({ params }: { params: Promise<{ route: string }> }) {
    const { route } = await params;

    return (
        <div>
            <h1>{'Route zwraca tutaj:'}</h1>
            <p>{JSON.stringify(route)}</p>
        </div>
    )
}