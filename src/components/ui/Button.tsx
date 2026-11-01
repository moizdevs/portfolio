import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  variant?: "primary" | "ghost";
  size?: "md" | "sm";
  external?: boolean;
  download?: boolean;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.98]";
const variants = {
  primary:
    "bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500 text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.7)] hover:shadow-[0_12px_36px_-6px_rgba(99,102,241,0.9)] hover:-translate-y-0.5",
  ghost: "glass text-slate-100 hover:border-indigo-400/50 hover:bg-white/[0.07] hover:-translate-y-0.5",
};
const sizes = { md: "px-6 py-3 text-sm", sm: "px-4 py-2 text-sm" };

export function Button({ href, variant = "primary", size = "md", external, download, className, children, ...rest }: Props) {
  const cls = cn(base, variants[variant], sizes[size], className);
  if (href) {
    if (external || download || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={cls}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...(download ? { download: true } : {})}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={rest.type ?? "button"} disabled={rest.disabled} onClick={rest.onClick} className={cls}>
      {children}
    </button>
  );
}
