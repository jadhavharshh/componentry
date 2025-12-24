import type React from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

const components = [
  { id: "001", title: "Button", href: "/docs/components/button" },
  { id: "002", title: "Flight Status Card", href: "/docs/components/flight-status-card" },
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}): React.JSX.Element {
  return (
    <div className="min-h-svh flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
            >
              Playground
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/docs"
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
              >
                Docs
              </Link>
            </nav>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="flex-1 flex">
        {/* Sidebar */}
        <aside className="w-64 shrink-0 border-r border-border hidden md:block">
          <div className="sticky top-14 h-[calc(100svh-3.5rem)] overflow-y-auto px-6 py-8">
            <nav className="space-y-8">
              <div className="space-y-3">
                <Link
                  href="/docs"
                  className="block text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
                >
                  Introduction
                </Link>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-widest text-muted-foreground/60">
                  Components
                </p>
                <ul className="space-y-2">
                  {components.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <span className="text-xs tabular-nums">{item.id}</span>
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 md:py-16">
          {children}
        </main>
      </div>
    </div>
  )
}
