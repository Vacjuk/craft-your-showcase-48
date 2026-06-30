import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/about-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vantage Design Studio" },
      {
        name: "description",
        content:
          "Vantage is an independent web studio building bespoke, high-performance websites. Meet the team, learn our process.",
      },
      { property: "og:title", content: "About Vantage" },
      {
        property: "og:description",
        content:
          "An independent studio building bespoke websites with strategy, craft, and care.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="px-6 pb-16 pt-16 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            About us
          </p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            A small studio doing serious work for brands that care about the
            details.
          </h1>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-2xl outline outline-1 -outline-offset-1 outline-black/5">
              <img
                src={portrait}
                alt="Inside the Vantage studio"
                width={800}
                height={1000}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-3 md:pt-4">
            <h2 className="text-2xl font-bold md:text-3xl">Our story</h2>
            <div className="mt-6 space-y-5 text-muted-foreground">
              <p>
                Vantage started in 2019 with a simple frustration: the gap
                between the websites our clients deserved and the ones the
                industry was shipping. Bloated builders, recycled templates,
                missed deadlines.
              </p>
              <p>
                We're a small, senior team — designers who code and engineers
                who care about typography. Every project gets the same two
                people from kickoff to launch. No account managers, no handoffs,
                no surprises.
              </p>
              <p>
                We work with founders, marketing leads, and creative directors
                who treat their website as a product, not a brochure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-brand/5 bg-muted/40 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold md:text-3xl">How we work</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-4">
            {[
              { n: "01", t: "Discover", d: "A working session to map goals, audience, and what success looks like." },
              { n: "02", t: "Design", d: "Strategy translated into a design system and key pages — reviewed early, reviewed often." },
              { n: "03", t: "Build", d: "Fast, semantic, accessible code. CMS integration so your team can keep momentum." },
              { n: "04", t: "Launch & care", d: "We stay close after launch, monitor performance, and iterate when it matters." },
            ].map((s) => (
              <div key={s.n}>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{s.n}</p>
                <h3 className="mt-3 text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold md:text-3xl">What we believe</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              ["Craft over volume", "We ship fewer sites a year so each one gets the attention it needs."],
              ["Performance is design", "A slow site is a broken site. Speed and accessibility aren't optional."],
              ["You own everything", "Code, assets, content — all yours. No platform lock-in, ever."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-brand/5 bg-card p-8">
                <h3 className="text-lg font-bold">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start gap-4 border-t border-brand/5 pt-10 md:flex-row md:items-center md:justify-between">
            <p className="text-xl font-bold">Curious to see the work?</p>
            <div className="flex gap-3">
              <Link to="/work" className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-bold text-white">
                View work
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-brand/15 px-6 py-3 text-sm font-bold">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
