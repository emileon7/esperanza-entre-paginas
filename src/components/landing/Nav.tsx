import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#proyecto", label: "Proyecto" },
  { href: "#equipos", label: "Equipos" },
  { href: "#impacto", label: "Impacto" },
  { href: "#donaciones", label: "Donaciones" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-white/90 backdrop-blur shadow-sm" : "bg-white/40 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <Logo size="sm" />
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-[#1C1C1C]/80 hover:text-[var(--color-brand-green)] transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#donaciones"
            className="rounded-full bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-light)] text-white px-4 py-2 text-sm font-bold shadow-sm transition-colors"
          >
            Donar
          </a>
        </nav>
        <button
          aria-label="Menú"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg text-[#1C1C1C]"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {open ? <><path d="M6 6l12 12" /><path d="M18 6L6 18" /></> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 px-2 rounded-lg text-[#1C1C1C] font-semibold hover:bg-[var(--color-brand-green)]/10"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#donaciones"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[var(--color-brand-green)] text-white px-4 py-2.5 text-center font-bold"
            >
              Donar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}