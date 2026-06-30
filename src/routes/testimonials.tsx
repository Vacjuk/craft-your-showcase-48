import { createFileRoute, Link } from "@tanstack/react-router";
import { testimonials } from "@/lib/testimonials";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Reference — Vantage Design Studio" },
      {
        name: "description",
        content:
          "Co o spolupráci s Vantage říkají zakladatelé, marketingoví šéfové a kreativní ředitelé.",
      },
      { property: "og:title", content: "Reference klientů — Vantage" },
      {
        property: "og:description",
        content:
          "Slova zakladatelů a týmů, pro které jsme spustili weby na míru.",
      },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Reference
        </p>
        <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
          Milá slova od lidí, pro které stavíme.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Malé studio žije nebo padá s doporučeními. Tady je, co klienti říkají
          po spuštění.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-brand/5 bg-card p-8 shadow-sm"
            >
              <blockquote className="text-lg font-medium italic leading-relaxed">
                „{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-full bg-accent/15 text-xs font-bold text-accent">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-brand p-10 text-white md:p-14">
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl">
            Chcete být další referencí?
          </h2>
          <p className="mt-4 max-w-xl text-white/70">
            Napište nám o projektu. Na každou poptávku odpovídáme do dvou
            pracovních dnů.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-brand"
          >
            Poptat projekt
          </Link>
        </div>
      </div>
    </section>
  );
}
