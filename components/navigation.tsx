"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const routes = [
  { path: '/', label: 'Strona Główna' },
  { 
    label: 'Renderowanie',
    children: [
      { path: '/static', label: 'Statyczne' },
      { path: '/dynamic', label: 'Dynamiczne' },
      { path: '/streaming', label: 'Strumieniowe' },
      { path: '/isr', label: 'ISR' },
      { path: '/generate-static-params/1', label: 'Funkcja generateStaticParams'}
    ]
  },
  {
    label: 'Routing',
    children: [
      { path: '/endpoints', label: 'Endpointy API' },
      { path: '/error-handling', label: 'Obsługa błędów' },
      { path: '/pages-layouts', label: 'Strony i layouty' },
      { path: 'routes', label: 'Ścieżki' },
      { path: '/middleware', label: 'Middleware'}
    ]
  },
  {
    label: 'Komponenty i dyrektywy',
    children: [
      { path: '/components', label: 'Komponenty' },
      { path: '/network-boundary', label: 'Granica Sieciowa' },
    ]
  },
  {
    path: '/caching',
    label: 'Cachowanie'
  }
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b bg-primary">
      <div className="container mx-auto px-4 py-4">
        <div className="flex gap-8">
          {routes.map((route) => (
            route.children ? (
              <div key={route.label} className="group relative">
                <span className="text-sm mt-1 font-medium text-white cursor-default">
                  {route.label}
                </span>
                <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white rounded-md shadow-lg py-2 min-w-[160px]">
                  {route.children.map((child) => (
                    <Link
                      prefetch={false}
                      key={child.path}
                      href={child.path}
                      className={cn(
                        "block px-4 py-2 text-sm transition-colors hover:bg-gray-100",
                        pathname === child.path
                          ? "text-primary font-medium"
                          : "text-gray-700"
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                prefetch={false}
                key={route.path}
                href={route.path}
                className={"text-sm mt-1 font-medium transition-colors text-white hover:text-white/80"}
              >
                {route.label}
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  )
}