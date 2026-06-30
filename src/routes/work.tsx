import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Realizace — Vantage Design Studio" },
      {
        name: "description",
        content:
          "Galerie nedávných webů na míru od Vantage — e-shopy, editorial, portfolia a rezervační platformy.",
      },
      { property: "og:title", content: "Vybrané realizace — Vantage" },
      {
        property: "og:description",
        content:
          "Vybrané weby na míru, které jsme navrhli a vyvinuli pro ambiciózní značky.",
      },
    ],
  }),
  component: Work,
});

function Work() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Portfolio · 2023–24
        </p>
        <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
          Weby na míru pro značky s vlastním názorem.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Výběr nedávných projektů. Každý byl navržen i postaven od nuly —
          žádné šablony, žádné zkratky.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16">
          {projects.map((p) => (
            <article key={p.slug} className="group">
              <div className="overflow-hidden rounded-2xl outline outline-1 -outline-offset-1 outline-black/5">
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.category}`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold">{p.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{p.category}</p>
                </div>
                <span className="shrink-0 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {p.year}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-brand/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 flex flex-col items-start gap-4 border-t border-brand/5 pt-12 md:flex-row md:items-center md:justify-between">
          <p className="max-w-md text-2xl font-bold">
            Máte v hlavě projekt? Rádi si o něm poslechneme.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-sm font-bold text-white"
          >
            Poptat projekt
          </Link>
        </div>
      </div>
    </section>
  );
}
