import Image from "next/image";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Portrait frame. Shows the photo from siteConfig.portrait when set,
 * otherwise an elegant monogram placeholder.
 */
export function Portrait({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <div className={cn("relative overflow-hidden rounded-[2rem] border border-white/15 bg-ink-800", className)}>
      {siteConfig.portrait ? (
        <Image
          src={siteConfig.portrait}
          alt={`Portrait of ${siteConfig.name}`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 80vw, 420px"
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={`${siteConfig.name} portrait placeholder`}
          className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_30%_20%,rgba(139,92,246,0.55),transparent_60%),radial-gradient(ellipse_at_80%_90%,rgba(59,130,246,0.45),transparent_55%)]"
        >
          <span className="font-display text-[7rem] font-semibold leading-none tracking-tighter text-white/90 sm:text-[9rem]">
            MR
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950/70 to-transparent" />
    </div>
  );
}
