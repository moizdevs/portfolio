import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950">
      <div className="border-t border-white/5 py-5 text-center text-xs text-slate-500">
        © 2026 {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
