import ServerActionsForm from "./server-actions-form"

export default function UseServerExample() {
  return (
    <div className="space-y-4">
      <div className="p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold mb-2">Przykład użycia &apos;use server&apos;</h3>
        <p className="text-sm text-muted-foreground">
          Poniżej znajduje się przykład działani akcji serwerowych.
          Akcje te są oznaczone dyrektywą use server co pozwala na przekazywanie ich przez network boundary (dyrektywa ta sprawia, że funkcje nią oznaczone są serializowalne) 
          lub importowanie bezpośrednio do środowiska klienckiego. Akcje te moga być wykonywane bezpośrednio z komponentów klienckich.
          O tej dyrektywie można również myśleć jak o furtce dla środowiska klienckiego do środowiska serwerowego.
        </p>
      </div>

      <ServerActionsForm />
    </div>
  )
}