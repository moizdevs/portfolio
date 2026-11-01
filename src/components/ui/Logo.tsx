import { Code2 } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#home" aria-label="Code with Moiz, back to top" className={`inline-flex items-center gap-2 ${className}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 shadow-[0_0_20px_-4px_rgba(99,102,241,0.8)]">
        <Code2 className="h-4 w-4 text-white" strokeWidth={2.5} />
      </span>
      <span className="font-display text-[15px] font-semibold tracking-tight text-white">
        Code with <span className="text-gradient">Moiz</span>
      </span>
    </a>
  );
}
