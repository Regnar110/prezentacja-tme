"use client"

import { useState } from "react"

export default function ClientComponent() {
  const [count, setCount] = useState(0)

  return (
    <div className="space-y-4">
      <div>
        <p className="mb-4">{`${count} likes`}</p>
        <button
          onClick={() => setCount(curr => curr + 1)}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
        >
          +1
        </button>
      </div>

      <div className="rounded-lg bg-muted p-4">
        <p className="text-sm">
          <strong>Jak to działa:</strong> Komponenty klienckie używają dyrektywy &quot;use client&quot;
          i mogą wykorzystywać hooki, oraz interaktywne funkcje przeglądarki. <strong className='text-orange-500 font-bold'>
            Pamiętaj, że dyrektywa &quot;use client&quot; nie zawsze jest wymagana do tego aby komponent był
            komponnetem klienckim!.
          </strong>
           Komponent importowany do innego komponentu, który już jest komponentem klienckim również się nim staje.
        </p>
      </div>
    </div>
  )
}