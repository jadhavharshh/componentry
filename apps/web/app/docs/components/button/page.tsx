import type React from "react"
import { Button } from "@workspace/ui/components/button"

export default function ButtonPage(): React.JSX.Element {
  return (
    <div className="space-y-16">
      <header className="grid md:grid-cols-[120px_1fr] gap-8">
        <div>
          <span className="text-6xl font-light text-muted-foreground/50">
            001
          </span>
        </div>
        <div className="space-y-4">
          <h1
            className="text-5xl md:text-6xl tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Button
          </h1>
          <p className="text-muted-foreground max-w-md">
            The most fundamental interactive element. A starting point for
            everything else.
          </p>
        </div>
      </header>

      <div className="grid md:grid-cols-[120px_1fr] gap-8">
        <div className="text-xs uppercase tracking-widest text-muted-foreground pt-1">
          Variants
        </div>
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { variant: "default" as const, label: "Default" },
              { variant: "secondary" as const, label: "Secondary" },
              { variant: "outline" as const, label: "Outline" },
              { variant: "ghost" as const, label: "Ghost" },
              { variant: "destructive" as const, label: "Destructive" },
              { variant: "link" as const, label: "Link" },
            ].map(({ variant, label }) => (
              <div key={variant} className="space-y-3">
                <div className="h-24 flex items-center justify-center bg-muted/30">
                  <Button variant={variant}>{label}</Button>
                </div>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-[120px_1fr] gap-8">
        <div className="text-xs uppercase tracking-widest text-muted-foreground pt-1">
          Scale
        </div>
        <div className="flex items-end gap-6 pb-4">
          {[
            { size: "sm" as const, label: "S" },
            { size: "default" as const, label: "M" },
            { size: "lg" as const, label: "L" },
          ].map(({ size, label }) => (
            <div key={size} className="flex flex-col items-center gap-3">
              <Button size={size} variant="outline">
                Button
              </Button>
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-[120px_1fr] gap-8">
        <div className="text-xs uppercase tracking-widest text-muted-foreground pt-1">
          Code
        </div>
        <div className="space-y-4">
          <pre className="p-6 bg-muted/30 text-sm overflow-x-auto font-mono">
            {`import { Button } from "@workspace/ui/components/button"

<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost" size="sm">Small ghost</Button>`}
          </pre>
          <p className="text-xs text-muted-foreground">
            Copy-paste ready. Tweak as needed.
          </p>
        </div>
      </div>
    </div>
  )
}
