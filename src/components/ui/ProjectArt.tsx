import { cn } from "@/lib/utils";

/**
 * Generated placeholder shown until a real screenshot is set in data/projects.ts.
 * Renders an abstract browser frame tinted by the project hue.
 */
export function ProjectArt({ hue, title, className }: { hue: number; title: string; className?: string }) {
  const a = `hsl(${hue} 85% 62%)`;
  const b = `hsl(${(hue + 50) % 360} 85% 55%)`;
  return (
    <div
      role="img"
      aria-label={`${title} preview placeholder`}
      className={cn("relative h-full w-full overflow-hidden", className)}
      style={{ background: `linear-gradient(135deg, hsl(${hue} 45% 14%), #080a15 70%)` }}
    >
      <div
        className="absolute -right-10 -top-10 h-56 w-56 rounded-full opacity-40 blur-3xl"
        style={{ background: a }}
      />
      <div
        className="absolute -bottom-16 left-4 h-48 w-48 rounded-full opacity-30 blur-3xl"
        style={{ background: b }}
      />
      <div className="absolute inset-x-[8%] bottom-0 top-[14%] rounded-t-xl border border-white/15 bg-ink-950/70 shadow-2xl backdrop-blur-sm">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="ml-3 h-2 w-1/3 rounded-full bg-white/10" />
        </div>
        <div className="space-y-2.5 p-4">
          <div className="h-3 w-2/5 rounded-full" style={{ background: a, opacity: 0.85 }} />
          <div className="h-2 w-4/5 rounded-full bg-white/10" />
          <div className="h-2 w-3/5 rounded-full bg-white/10" />
          <div className="mt-4 grid grid-cols-3 gap-2.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-14 rounded-lg border border-white/10 bg-white/[0.04]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
