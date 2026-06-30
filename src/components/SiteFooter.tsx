import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand/5 bg-canvas">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Pustíme se do toho?</h2>
        <p className="mt-4 max-w-md text-muted-foreground">
          Každé čtvrtletí přijímáme jen hrstku projektů. Pokud si vaše značka
          zaslouží víc než šablonu, dejte nám vědět.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              E-mail
            </p>
            <a
              href="mailto:ahoj@vantage.studio"
              className="border-b border-brand pb-1 text-lg font-bold"
            >
              ahoj@vantage.studio
            </a>
          </div>
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Studio
            </p>
            <p className="text-sm">
              Holešovická 42
              <br />
              170 00 Praha 7
            </p>
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Sledujte nás
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-sm font-bold hover:text-accent">Twitter</a>
              <a href="#" className="text-sm font-bold hover:text-accent">Dribbble</a>
              <a href="#" className="text-sm font-bold hover:text-accent">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-brand/5 pt-8 text-[10px] uppercase tracking-widest text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Vantage Design Studio. Všechna práva vyhrazena.</p>
          <div className="flex gap-4">
            <Link to="/work">Realizace</Link>
            <Link to="/about">O nás</Link>
            <Link to="/contact">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
