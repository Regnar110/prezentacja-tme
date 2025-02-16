"use client"

import { useState } from "react"

interface ServerData {
  message: string
  timestamp: string
  items: string[]
  metadata: {
    source: string
    type: string
  }
}

export default function ClientDisplay({ data }: { data: ServerData }) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  return (
    <div className="p-4 bg-yellow-50 rounded-lg">
      <p className="font-medium mb-2">Komponent Kliencki</p>
      <p className="text-sm text-muted-foreground mb-4">
        Ten komponent otrzymał zserializowane dane z komponentu serwerowego
      </p>

      <div className="space-y-2">
        <p><strong>Wiadomość:</strong> {data.message}</p>
        <p><strong>Czas:</strong> {new Date(data.timestamp).toLocaleString()}</p>
        
        <div>
          <p className="font-medium mb-1">Elementy (kliknij aby wybrać):</p>
          <div className="flex gap-2">
            {data.items.map((item) => (
              <button
                key={item}
                onClick={() => setSelectedItem(item)}
                className={`px-3 py-1 rounded ${
                  selectedItem === item 
                    ? "bg-secondary text-white" 
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {selectedItem && (
          <p className="text-sm mt-2">
            Wybrany element: <strong>{selectedItem}</strong>
          </p>
        )}
      </div>
    </div>
  )
}