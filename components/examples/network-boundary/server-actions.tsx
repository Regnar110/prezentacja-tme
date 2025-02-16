import ServerActionsForm from "./server-actions-form"

export default function ServerActionsExample() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold mb-2">Akcje Serwerowe</h3>
          <p className="text-sm text-muted-foreground">
            Akcje serwerowe pozwalają na wykonywanie operacji po stronie serwera 
            bezpośrednio z komponentów klienckich, używając dyrektywy &apos;use server&apos;.
          </p>
        </div>

        <ServerActionsForm />
      </div>

      <div className="rounded-lg bg-muted p-4">
        <p className="text-sm">
          <strong>Jak to działa:</strong> Dyrektywa &apos;use server&apos; oznacza funkcje, 
          które będą wykonywane na serwerze. Można je importować i wywoływać 
          bezpośrednio z komponentów klienckich. Next.js automatycznie tworzy 
          endpoint API dla każdej takiej funkcji.
        </p>
      </div>
    </div>
  )
}