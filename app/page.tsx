import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Zap, Globe, CloudLightning, Split, GitBranchPlus, Component, Network, Database, AlertCircle, AlertTriangle, Layout, Route, Server, Shield } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Next js</h1>
      </div>

      <div className="grid gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Renderowanie</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/static" prefetch={false}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Globe className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Renderowanie Statyczne</CardTitle>
                  <CardDescription>Prerenderowane ściezek w czasie budowania aplikacji dla maksymalnej wydajności</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Zobacz więcej</span>
                  <ArrowRight className="w-4 h-4" />
                </CardContent>
              </Card>
            </Link>

            <Link href="/dynamic/1" prefetch={false}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Zap className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Renderowanie Dynamiczne</CardTitle>
                  <CardDescription>Renderowane na każde żądanie dla aktualnych danych</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Zobacz więcej</span>
                  <ArrowRight className="w-4 h-4" />
                </CardContent>
              </Card>
            </Link>
 
            <Link href="/streaming" prefetch={false}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CloudLightning className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Renderowanie Strumieniowe</CardTitle>
                  <CardDescription>Progresywne renderowanie dla lepszego UX</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Zobacz więcej</span>
                  <ArrowRight className="w-4 h-4" />
                </CardContent>
              </Card>
            </Link>
            <Card className="hover:shadow-lg transition-shadow cursor-not-allowed opacity-65 border-red-600">
              <CardHeader>
                <Split className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>Częściowe Prerenderowanie</CardTitle>
                <CardDescription>Połączenie treści statycznej i dynamicznej</CardDescription>
              </CardHeader>
              <CardContent className="flex gap-2 items-center">
                <AlertCircle color='red' />
                <span className="text-sm text-muted-foreground">Dostępne w wersji canary</span>
              </CardContent>
            </Card>
            <Link href="/isr" prefetch={false}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Zap className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Inkramentalna statyczna regeneracja</CardTitle>
                  <CardDescription>
                    Dynamiczne dostarczanie treści z zachowaniem korzyści płynących z renderowania statycznego strony
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Zobacz więcej</span>
                  <ArrowRight className="w-4 h-4" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/generate-static-params/1" prefetch={false}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <GitBranchPlus className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Funkcja generateStaticParams()</CardTitle>
                  <CardDescription>
                    Generowanie statycznych stron przy jednoczesnym wykorzystaniu dynamicznych segmentów URL
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Zobacz więcej</span>
                  <ArrowRight className="w-4 h-4" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Sekcja Komponenty i dyrektywy */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Komponenty i dyrektywy</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/components" prefetch={false}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Component className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Komponenty Serwerowe i Klienckie</CardTitle>
                  <CardDescription> Komponenty serwerowe oraz klienckie i sposoby ich zagnieżdżania</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Zobacz więcej</span>
                  <ArrowRight className="w-4 h-4" />
                </CardContent>
              </Card>
            </Link>

            <Link href="/network-boundary" prefetch={false}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Network className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Network Boundary i dyrektywy</CardTitle>
                  <CardDescription>Network boundary oraz dyrektywy &apos;use client&apos; i &apos;use server&apos;</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Zobacz więcej</span>
                  <ArrowRight className="w-4 h-4" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
        {/* Sekcja Routing */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Routing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/pages-layouts">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Layout className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Strony i Layouty</CardTitle>
                  <CardDescription>Organizacja stron i współdzielone layouty</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Zobacz więcej</span>
                  <ArrowRight className="w-4 h-4" />
                </CardContent>
              </Card>
            </Link>

            <Link href="/routes">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Route className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Ścieżki</CardTitle>
                  <CardDescription>Ściezki statyczne i ścieżki z dynamicznymi segmentami</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Zobacz więcej</span>
                  <ArrowRight className="w-4 h-4" />
                </CardContent>
              </Card>
            </Link>

            <Link href="/endpoints">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Server className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Endpointy API</CardTitle>
                  <CardDescription>Tworzenie endpointów API</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Zobacz więcej</span>
                  <ArrowRight className="w-4 h-4" />
                </CardContent>
              </Card>
            </Link>

            <Link href="/middleware">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Middleware</CardTitle>
                  <CardDescription>Przechwytywanie i modyfikacja żądań</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Zobacz więcej</span>
                  <ArrowRight className="w-4 h-4" />
                </CardContent>
              </Card>
            </Link>

            <Link href="/error-handling">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <AlertTriangle className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Obsługa Błędów</CardTitle>
                  <CardDescription>Mechanzim obsługi błędów</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Zobacz więcej</span>
                  <ArrowRight className="w-4 h-4" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Sekcja Cachowanie */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Cachowanie</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/caching" prefetch={false}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Database className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Mechanizmy Cachowania</CardTitle>
                  <CardDescription>
                    Strategie cachowania w Next.js i ich zastosowania
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Zobacz więcej</span>
                  <ArrowRight className="w-4 h-4" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}