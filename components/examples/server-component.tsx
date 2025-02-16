export default function ServerComponent() {
  const serverTime = new Date().toLocaleTimeString()
  
  return (
    <div className="space-y-4">
      <p>
        To jest komponent serwerowy. Czas wygenerowany na serwerze: {serverTime}
      </p>
      <div className="rounded-lg bg-muted p-4">
        <p className="text-sm">
          <strong>Jak to działa:</strong> Komponenty serwerowe są domyślne w Next.js.
          Nie mogą używać hooków, ani interaktywnych funkcji przeglądarki. Są za to bardzo dobrym miejscem z poziomu którego
          możemy pobierać dane, uzyskiwać dostęp do zasobów serwerowych, wykonywać operacje na bazach danych itd..
          <strong className='text-red-700 font-bold'> Pamiętaj, że komponent serwerowy nie może być oznaczony dyrektywą &apos;use server&apos;</strong>
        </p>
      </div>
    </div>
  )
}