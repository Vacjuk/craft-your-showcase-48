import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vantage Design Studio" },
      {
        name: "description",
        content:
          "Start a custom website project with Vantage. Email hello@vantage.studio or send a brief through the form.",
      },
      { property: "og:title", content: "Contact Vantage" },
      {
        property: "og:description",
        content:
          "Start a custom website project. Email us or send a brief through the form.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </p>
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Let's <span className="text-accent">talk</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Tell us a little about your project and we'll get back within two
            business days.
          </p>

          <div className="mt-12 space-y-8">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Email
              </p>
              <a
                href="mailto:hello@vantage.studio"
                className="border-b border-brand pb-1 text-lg font-bold"
              >
                hello@vantage.studio
              </a>
            </div>
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Phone
              </p>
              <a href="tel:+12125550148" className="text-lg font-bold">
                +1 (212) 555-0148
              </a>
            </div>
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Studio
              </p>
              <p className="text-base">
                42 Hawley Street
                <br />
                Brooklyn, NY 11211
              </p>
            </div>
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Hours
              </p>
              <p className="text-base">Mon–Fri · 9:00–18:00 ET</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-6 rounded-3xl border border-brand/5 bg-card p-8 shadow-sm md:p-10"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Name" name="name" required placeholder="Jane Doe" />
              <Field
                label="Email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
              />
            </div>
            <Field label="Company" name="company" placeholder="Optional" />
            <div>
              <Label htmlFor="project">Project type</Label>
              <select
                id="project"
                name="project"
                className="mt-2 w-full rounded-lg border border-brand/10 bg-canvas px-4 py-3 text-sm focus:border-accent focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Select one…
                </option>
                <option>New website</option>
                <option>Redesign</option>
                <option>E-commerce</option>
                <option>Ongoing partnership</option>
                <option>Something else</option>
              </select>
            </div>
            <div>
              <Label htmlFor="message">Tell us about it</Label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Goals, timeline, links, anything that helps us understand the project."
                className="mt-2 w-full rounded-lg border border-brand/10 bg-canvas px-4 py-3 text-sm focus:border-accent focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-brand py-4 text-sm font-bold text-white transition-transform active:scale-[0.99]"
            >
              {sent ? "Thanks — we'll be in touch" : "Send inquiry"}
            </button>
            {sent && (
              <p className="text-center text-xs text-muted-foreground">
                Your message is on its way. We typically reply within two
                business days.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
    >
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-brand/10 bg-canvas px-4 py-3 text-sm focus:border-accent focus:outline-none"
      />
    </div>
  );
}
