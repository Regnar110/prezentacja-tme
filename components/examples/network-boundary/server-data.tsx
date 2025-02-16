import ClientDisplay from "./client-display"

const serverData = {
  message: "Dane z serwera",
  timestamp: new Date().toISOString(),
  items: ["Element 1", "Element 2", "Element 3"],
  metadata: {
    source: "Komponent Serwerowy",
    type: "Przykład"
  }
}

export default function ServerDataComponent() {
  return (
    <div className="space-y-4">
      <div className="p-4 bg-blue-50 rounded-lg">
        <p className="font-medium">Dane przygotowane na serwerze:</p>
        <pre className="mt-2 text-sm bg-white p-2 rounded">
          {JSON.stringify(serverData)}
        </pre>
      </div>

      <div className="border-l-4 border-secondary pl-4">
        <ClientDisplay data={serverData} />
      </div>
    </div>
  )
}