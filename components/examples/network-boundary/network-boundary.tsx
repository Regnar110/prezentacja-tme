
import { Card } from "@/components/ui/card"
import UseClientExample from "./use-client-example"
import UseServerExample from "./use-server-example"

export default function NetworkBoundaryExample() {
  return (
    <div className="space-y-8">
      {/* Sekcja use client */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Dyrektywa &apos;use client&apos;</h2>
        <Card className="p-6 border-2 border-yellow-200">
          <UseClientExample />
        </Card>
      </div>

      {/* Sekcja use server */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Dyrektywa &apos;use server&apos;</h2>
        <Card className="p-6 border-2 border-blue-200">
          <UseServerExample />
        </Card>
      </div>

      <div className="grid gap-4">
        {/* Wyjaśnienie use client */}
        <div className="rounded-lg bg-yellow-50 p-4">
          <p className="text-sm">
            <strong>Jak działa &apos;use client&apos;:</strong>
            <ul className="mt-2 space-y-2">
              <li>• Oznacza punkt początkowy kodu klienckiego w aplikacji - tworzy granicę sieci</li>
              <li>• Propsy przekazywane do komponentu z tą dyrektywą muszą być serializowalne</li>
              <li>• Wszystkie importowane komponenty poniżej tej dyrektywy również stają się klienckie</li>
              <li>• Pozwala na używanie hooków (useState, useEffect, itp.)</li>
              <li>• Umożliwia obsługę zdarzeń przeglądarki (onClick, onChange, itp.)</li>
              <li>• Komponenty klienckie z dyrektywą use client mogą być zagnieżdżane w komponentach serwerowych</li>
            </ul>
          </p>
        </div>

        {/* Wyjaśnienie use server */}
        <div className="rounded-lg bg-blue-50 p-4">
          <p className="text-sm">
            <strong>Jak działa &apos;use server&apos;:</strong>
            <ul className="mt-2 space-y-2">
              <li>• Oznacza funkcje, które będą wykonywane wyłącznie na serwerze</li>
              <li>• Może być używana na poziomie pliku lub pojedynczej funkcji (inline)</li>
              <li>• Funckje oznaczone tą dyrektywą tworzą bezpieczny ednpoint API HTTP POST</li>
              <li>• Każda taka funkcja ma swoje bezpieczne ID</li>
              <li>• Pozwala na bezpośredni dostęp do zasobów serwerowych (bazy danych, pliki)</li>
              <li>• Możliwe do przekazywania przez network bounadry</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  )
}