"use client"

import * as React from "react"

const PACKAGE_MANAGERS = ["pnpm", "npm", "yarn", "bun"] as const
type PackageManager = (typeof PACKAGE_MANAGERS)[number]

const COMMANDS: Record<PackageManager, string> = {
  pnpm: "pnpm dlx shadcn@latest add",
  npm: "npx shadcn@latest add",
  yarn: "yarn dlx shadcn@latest add",
  bun: "bunx shadcn@latest add",
}

interface InstallCommandProps {
  component: string
}

export function InstallCommand({ component }: InstallCommandProps) {
  const [selected, setSelected] = React.useState<PackageManager>("pnpm")

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  const componentUrl = `${baseUrl}/r/${component}.json`
  const command = `${COMMANDS[selected]} "${componentUrl}"`

  return (
    <div className="space-y-3">
      <div className="flex gap-1 p-1 bg-muted/50 rounded-md w-fit">
        {PACKAGE_MANAGERS.map((pm) => (
          <button
            key={pm}
            onClick={() => setSelected(pm)}
            className={`px-3 py-1.5 text-xs font-mono rounded transition-colors ${
              selected === pm
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {pm}
          </button>
        ))}
      </div>
      <pre className="p-3 bg-muted/30 text-sm font-mono rounded-md overflow-x-auto whitespace-nowrap">
        {command}
      </pre>
    </div>
  )
}
