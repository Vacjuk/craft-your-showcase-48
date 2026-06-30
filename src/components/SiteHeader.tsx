import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", label: "Úvod" },
  { to: "/work", label: "Realizace" },
  { to: "/about", label: "O nás" },
  { to: "/testimonials", label: "Reference" },
  { to: "/contact", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand/5 bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="text-lg font-extrabold uppercase tracking-tighter"
        >
          Vantage.
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-brand" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-brand" }}
              className="text-sm font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2 text-xs font-bold text-white transition-transform active:scale-95"
          >
            Poptat projekt
          </Link>
        </nav>

        <button
          aria-label="Přepnout menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 p-2 md:hidden"
        >
          <div className={`h-0.5 w-6 bg-brand transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <div className={`mt-1.5 h-0.5 w-4 bg-brand transition-all ml-auto ${open ? "-translate-y-1 w-6 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-brand/5 bg-canvas px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-brand" }}
                  inactiveProps={{ className: "text-muted-foreground" }}
                  className="block py-2 text-base font-bold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
