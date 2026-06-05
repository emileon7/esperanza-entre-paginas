import { PaperPlane } from "./Decorations";

export function Logo({ size = "lg" }: { size?: "sm" | "lg" }) {
  const big = size === "lg";
  return (
    <div className={`relative inline-block ${big ? "px-10 py-6" : "px-2"}`}>
      {big && (
        <>
          <PaperPlane className="absolute -left-6 top-6 w-10 h-10 text-slate-500 animate-float" />
          <PaperPlane className="absolute -right-4 -top-2 w-8 h-8 text-slate-400 animate-float" style={{ animationDelay: "1.2s" }} />
          <PaperPlane className="absolute right-8 bottom-0 w-7 h-7 text-slate-400 animate-float" style={{ animationDelay: "2.4s" }} />
        </>
      )}
      <div className="font-display leading-none text-center">
        <div className={`font-extrabold tracking-tight text-[var(--color-brand-blue)] ${big ? "text-5xl sm:text-7xl" : "text-2xl"}`}>
          ESPERANZA
        </div>
        <div className={`italic font-bold text-[var(--color-brand-yellow)] ${big ? "text-xl sm:text-2xl mt-1" : "text-sm"}`}>
          entre
        </div>
        <div className={`font-extrabold tracking-wide text-[var(--color-brand-green)] ${big ? "text-3xl sm:text-5xl mt-1" : "text-xl"}`}>
          PÁGINAS
        </div>
      </div>
    </div>
  );
}