import { createFileRoute, Link } from "@tanstack/react-router";
import { testimonials } from "@/lib/testimonials";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Vantage Design Studio" },
      {
        name: "description",
        content:
          "What founders, marketing leads, and creative directors say about working with Vantage.",
      },
      { property: "og:title", content: "Client testimonials — Vantage" },
      {
        property: "og:description",
        content:
          "Words from the founders and teams we've shipped custom websites for.",
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
          Testimonials
        </p>
        <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
          Kind words from the people we build for.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          A small studio lives or dies by referrals. Here's what our clients
          say after launch.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-brand/5 bg-card p-8 shadow-sm"
            >
              <blockquote className="text-lg font-medium italic leading-relaxed">
                "{t.quote}"
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
            Want to be the next testimonial?
          </h2>
          <p className="mt-4 max-w-xl text-white/70">
            Tell us about the project. We respond to every inquiry within two
            business days.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-brand"
          >
            Start a project
          </Link>
        </div>
      </div>
    </section>
  );
}
