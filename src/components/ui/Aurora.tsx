/** Ambient aurora lighting. Pure CSS (transform animations only) so it stays cheap. */
export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute -left-[10%] -top-[20%] h-[60vh] w-[60vw] max-w-[780px] rounded-full bg-violet-600/25 blur-[120px] animate-drift" />
      <div className="absolute -right-[8%] top-[5%] h-[55vh] w-[50vw] max-w-[700px] rounded-full bg-blue-600/20 blur-[130px] animate-drift-slow" />
      <div className="absolute bottom-[-25%] left-[25%] h-[50vh] w-[45vw] max-w-[640px] rounded-full bg-indigo-500/20 blur-[130px] animate-drift" />
    </div>
  );
}
