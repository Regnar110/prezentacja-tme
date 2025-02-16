// To jest komponent serwerowy
import ClientInServer from "./client-in-server"

export default function NestedComponents() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border p-4">
        <p className="font-semibold mb-2">Komponent Serwerowy (rodzic)</p>
        <ClientInServer>
          <p>To jest zawartość z komponentu serwerowego</p>
        </ClientInServer>
      </div>
      
      <div className="rounded-lg bg-muted p-4">
        <p className="text-sm">
          <strong>Jak to działa:</strong> Komponenty serwerowe mogą importować komponenty Klienckie pod warkunkiem,
          że będą zawierać dyrektywę &apos;use client&apos;. <strong className='text-red-700 font-bold'>Komponenty klienckie nie mogą importować komponentów serwerowych</strong>.
          Związane jest to z kolejnością renderowania po stronie serwera. Sposobem na umieszczenie komponentu serwerowego jako
          dziecko komponentu klienckiego jest przekazanie go jako children. Jest to możliwe ze względu na to, że komponenty serwerowe
          są serializowalne dzięki czemu mogą być przenoszone przez network boundary.
        </p>
      </div>
    </div>
  )
}