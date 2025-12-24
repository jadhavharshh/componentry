import type React from "react"
import Link from "next/link"

export default function DocsIntroPage(): React.JSX.Element {
  return (
    <div className="grid md:grid-cols-2 gap-16 md:gap-24">
      <div className="space-y-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Manifesto
        </p>
        <h1
          className="text-5xl md:text-6xl leading-[1.1] tracking-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          A sketchbook,
          <br />
          not a system.
        </h1>
        <p className="text-muted-foreground leading-relaxed max-w-md">
          This is a personal workshop for building UI components in public.
          Ideas are rough. Experiments are welcome. Nothing here is meant to be
          complete.
        </p>
      </div>

      <div className="space-y-12 md:pt-16">
        <div className="space-y-4">
          <p
            className="text-2xl leading-snug"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            &ldquo;Progress over polish.&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm">
          <div className="space-y-3">
            <p className="text-muted-foreground">Values</p>
            <ul className="space-y-1">
              <li>Clarity</li>
              <li>Experimentation</li>
              <li>Learning</li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-muted-foreground">Not</p>
            <ul className="space-y-1">
              <li>A design system</li>
              <li>A UI kit</li>
              <li>Stable</li>
            </ul>
          </div>
        </div>

        <div className="pt-4">
          <Link
            href="/docs/components/button"
            className="inline-flex items-center gap-2 text-sm group"
          >
            <span className="text-muted-foreground">001</span>
            <span className="group-hover:underline">Button</span>
            <span className="text-muted-foreground">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
