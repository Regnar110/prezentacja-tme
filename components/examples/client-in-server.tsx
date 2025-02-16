"use client"

import Link from 'next/link'
import { useState } from "react"

export default function ClientInServer({
  children
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="relative rounded-lg border-2 border-dashed border-primary/50 p-4">
      <Link href={'/network-boundary'} className='absolute underline -top-3 bg-white text-sm text-red-600 font-bold'>Network boundary</Link>
      <p className="font-semibold mb-2">Komponent Kliencki (dziecko)</p>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary/90 mb-4"
      >
        {isOpen ? "Ukryj" : "Pokaż"} zawartość serwerową
      </button>
      
      {isOpen && (
        <div className="pl-4 border-l-2 border-primary/30">
          {children}
        </div>
      )}
    </div>
  )
}