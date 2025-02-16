export default function FullRouteCache() {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-green-50 rounded-lg">
        <h3 className="font-semibold mb-2">Full Route Cache</h3>
        <p className="text-sm text-muted-foreground">
          Cache przeznaczony dla całych routów aplikacji, działający po stronie serwera.
          Przechowuje HTML i RSCP statycznie wyrenderowanych strony.
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-white p-4 rounded-md border">
          <h4 className="font-medium mb-2">Jak to działa?</h4>
          <ul className="space-y-2 text-sm">
            <li>• Cachuje całe strony podczas budowania aplikacji</li>
            <li>• Przechowuje HTML, RSC payload</li>
            <li>• Wspiera ISR</li>
          </ul>
        </div>
        <div className="bg-muted p-4 rounded-lg">
          <div className="text-sm">
            <strong>Kiedy używać:</strong>
            <ul className="mt-2 space-y-1">
              <li>• Dla stron z treścią statyczną lub rzadko się zmieniającą</li>
              <li>• W przypadku stron wymagających wysokiej wydajności</li>
              <li>• Dla optymalizacji SEO</li>
              <li>• Gdy chcesz zmniejszyć obciążenie serwera</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}