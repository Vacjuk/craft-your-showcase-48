import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import { testimonials } from "@/lib/testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vantage — Weby na míru pro značky, které nechtějí splynout" },
      {
        name: "description",
        content:
          "Vantage je butikové studio, které navrhuje a staví weby na míru s důrazem na výkon pro ambiciózní značky.",
      },
      { property: "og:title", content: "Vantage — Weby na míru pro ambiciózní značky" },
      {
        property: "og:description",
        content:
          "Butikové studio tvořící rychlé weby na míru. Prohlédněte si výběr realizací a zadejte projekt.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = projects.slice(0, 3);
  const quote = testimonials[0];

  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-20 pt-16 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Nezávislé web studio · Od roku 2019
          </p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            Tvoříme <span className="text-accent">digitální</span> artefakty.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground md:text-xl">
            Weby šité na míru značkám, které odmítají vypadat jako všichni
            ostatní. Strategie, design i vývoj — pod jednou střechou.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/work"
              className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-sm font-bold text-white transition-transform active:scale-95"
            >
              Naše realizace
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-brand/15 px-8 py-4 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Poptat projekt
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-brand/5 bg-muted/40 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Design vedený značkou",
              d: "Začínáme tím, co vás odlišuje, a kolem toho stavíme každý pixel.",
            },
            {
              n: "02",
              t: "Vývoj na míru",
              d: "Štíhlý, sémantický kód. Žádné nafouknuté page-buildery. Patří vám napořád.",
            },
            {
              n: "03",
              t: "Průběžná péče",
              d: "Volitelné měsíční partnerství pro obsah, iterace a výkon — když to potřebujete.",
            },
          ].map((s) => (
            <div key={s.n}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                {s.n}
              </p>
              <h3 className="mt-3 text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Work */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between border-b border-brand/10 pb-4">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Vybrané realizace
            </h2>
            <Link to="/work" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-brand">
              Všechny projekty →
            </Link>
          </div>

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {featured.map((p) => (
              <article key={p.slug} className="group space-y-4">
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
                <div>
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.category}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="bg-brand px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white/50">
            O studiu
          </h2>
          <p className="max-w-3xl text-2xl font-medium leading-relaxed md:text-3xl">
            Butikové studio zaměřené na rychlost, přístupnost a design vedený
            konverzí. Kód máme štíhlý, pixely ostré a proces transparentní —
            od prvního hovoru až po spuštění.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              ["70+", "Spuštěných webů"],
              ["98", "Průměrné Lighthouse skóre"],
              ["4 týdny", "Obvyklý časový plán"],
              ["100%", "Nezávislé vlastnictví"],
            ].map(([k, v]) => (
              <div key={v}>
                <p className="text-3xl font-extrabold md:text-4xl">{k}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/60">{v}</p>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center text-sm font-bold text-white underline underline-offset-4"
          >
            Více o nás →
          </Link>
        </div>
      </section>

      {/* Single testimonial */}
      <section className="bg-accent/5 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Milá slova
          </p>
          <p className="mt-6 text-2xl font-medium italic leading-relaxed md:text-3xl">
            „{quote.quote}"
          </p>
          <p className="mt-6 text-sm font-bold">
            {quote.name} <span className="font-normal text-muted-foreground">— {quote.role}</span>
          </p>
          <Link
            to="/testimonials"
            className="mt-8 inline-flex text-xs font-bold uppercase tracking-widest hover:text-accent"
          >
            Číst další →
          </Link>
        </div>
      </section>
    </>
  );
}
