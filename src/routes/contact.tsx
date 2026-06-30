import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontakt — Vantage Design Studio" },
      {
        name: "description",
        content:
          "Zadejte projekt webu na míru s Vantage. Napište na ahoj@vantage.studio nebo pošlete brief přes formulář.",
      },
      { property: "og:title", content: "Kontakt Vantage" },
      {
        property: "og:description",
        content:
          "Zadejte projekt webu na míru. Napište nám nebo pošlete brief přes formulář.",
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
            Kontakt
          </p>
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Pojďme si <span className="text-accent">promluvit</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Napište nám pár slov o projektu a ozveme se do dvou pracovních dnů.
          </p>

          <div className="mt-12 space-y-8">
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
                Telefon
              </p>
              <a href="tel:+420212555148" className="text-lg font-bold">
                +420 212 555 148
              </a>
            </div>
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Studio
              </p>
              <p className="text-base">
                Holešovická 42
                <br />
                170 00 Praha 7
              </p>
            </div>
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Otevírací doba
              </p>
              <p className="text-base">Po–Pá · 9:00–18:00</p>
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
              <Field label="Jméno" name="name" required placeholder="Jan Novák" />
              <Field
                label="E-mail"
                name="email"
                type="email"
                required
                placeholder="vy@firma.cz"
              />
            </div>
            <Field label="Společnost" name="company" placeholder="Volitelné" />
            <div>
              <Label htmlFor="project">Typ projektu</Label>
              <select
                id="project"
                name="project"
                className="mt-2 w-full rounded-lg border border-brand/10 bg-canvas px-4 py-3 text-sm focus:border-accent focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Vyberte…
                </option>
                <option>Nový web</option>
                <option>Redesign</option>
                <option>E-shop</option>
                <option>Dlouhodobá spolupráce</option>
                <option>Něco jiného</option>
              </select>
            </div>
            <div>
              <Label htmlFor="message">Povězte nám o projektu</Label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Cíle, termíny, odkazy — cokoli, co nám pomůže projekt pochopit."
                className="mt-2 w-full rounded-lg border border-brand/10 bg-canvas px-4 py-3 text-sm focus:border-accent focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-brand py-4 text-sm font-bold text-white transition-transform active:scale-[0.99]"
            >
              {sent ? "Děkujeme — brzy se ozveme" : "Odeslat poptávku"}
            </button>
            {sent && (
              <p className="text-center text-xs text-muted-foreground">
                Vaše zpráva je na cestě. Obvykle odpovídáme do dvou pracovních
                dnů.
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
