import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import { testimonials } from "@/lib/testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vantage — Custom websites for brands that refuse to look like everyone else" },
      {
        name: "description",
        content:
          "Vantage is a boutique studio designing and building bespoke, high-performance websites for ambitious brands.",
      },
      { property: "og:title", content: "Vantage — Custom websites for ambitious brands" },
      {
        property: "og:description",
        content:
          "Boutique studio crafting bespoke, high-performance websites. View selected work and start a project.",
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
            Independent Web Studio · Est. 2019
          </p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            We build <span className="text-accent">digital</span> artifacts.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground md:text-xl">
            Tailor-made websites for brands that refuse to look like everyone
            else. Strategy, design, and engineering — under one roof.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/work"
              className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-sm font-bold text-white transition-transform active:scale-95"
            >
              View our work
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-brand/15 px-8 py-4 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Start a project
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
              t: "Brand-led design",
              d: "We start with what makes you different, then design every pixel around it.",
            },
            {
              n: "02",
              t: "Custom build",
              d: "Lean, semantic code. No bloated page-builders. Yours to own, forever.",
            },
            {
              n: "03",
              t: "Ongoing care",
              d: "Optional retainers for content, iteration, and performance — when you need us.",
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
              Selected Work
            </h2>
            <Link to="/work" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-brand">
              All projects →
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
            About the studio
          </h2>
          <p className="max-w-3xl text-2xl font-medium leading-relaxed md:text-3xl">
            A boutique studio focused on speed, accessibility, and conversion-led
            design. Our code is lean, our pixels are sharp, and our process is
            transparent — from first call to launch day.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              ["60+", "Sites shipped"],
              ["98", "Avg. Lighthouse score"],
              ["4 wks", "Typical timeline"],
              ["100%", "Independently owned"],
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
            More about us →
          </Link>
        </div>
      </section>

      {/* Single testimonial */}
      <section className="bg-accent/5 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Kind words
          </p>
          <p className="mt-6 text-2xl font-medium italic leading-relaxed md:text-3xl">
            "{quote.quote}"
          </p>
          <p className="mt-6 text-sm font-bold">
            {quote.name} <span className="font-normal text-muted-foreground">— {quote.role}</span>
          </p>
          <Link
            to="/testimonials"
            className="mt-8 inline-flex text-xs font-bold uppercase tracking-widest hover:text-accent"
          >
            Read more →
          </Link>
        </div>
      </section>
    </>
  );
}
