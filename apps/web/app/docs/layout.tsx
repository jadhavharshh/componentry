import type React from "react"
import Link from "next/link"

const components = [
  { id: "001", title: "Button", href: "/docs/components/button" },
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}): React.JSX.Element {
  return (
    <div className="min-h-svh">
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
          >
            Playground
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/docs"
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
            >
              About
            </Link>
            <span className="text-muted-foreground/30">|</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Index
            </span>
            {components.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs tabular-nums text-muted-foreground hover:text-foreground"
              >
                {item.id}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">{children}</main>
    </div>
  )
}
