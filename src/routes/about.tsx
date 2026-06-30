import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/about-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "O nás — Vantage Design Studio" },
      {
        name: "description",
        content:
          "Vantage je nezávislé webové studio stavějící weby na míru s důrazem na výkon. Poznejte tým a náš proces.",
      },
      { property: "og:title", content: "O studiu Vantage" },
      {
        property: "og:description",
        content:
          "Nezávislé studio stavějící weby na míru se strategií, řemeslem a péčí.",
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
            O nás
          </p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Malé studio, které dělá vážnou práci pro značky, jimž záleží na
            detailech.
          </h1>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-2xl outline outline-1 -outline-offset-1 outline-black/5">
              <img
                src={portrait}
                alt="V interiéru studia Vantage"
                width={800}
                height={1000}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-3 md:pt-4">
            <h2 className="text-2xl font-bold md:text-3xl">Náš příběh</h2>
            <div className="mt-6 space-y-5 text-muted-foreground">
              <p>
                Vantage vzniklo v roce 2019 z jednoduché frustrace: z propasti
                mezi weby, jaké si naši klienti zasloužili, a tím, co obor
                doopravdy dodával. Nafouknuté buildery, recyklované šablony,
                zmeškané termíny.
              </p>
              <p>
                Jsme malý seniorní tým — designéři, kteří kódují, a vývojáři,
                kterým záleží na typografii. Každý projekt vedou stejní dva
                lidé od kick-offu po spuštění. Žádní account manažeři, žádné
                předávání, žádná překvapení.
              </p>
              <p>
                Spolupracujeme se zakladateli, marketingovými šéfy a kreativními
                řediteli, kteří vnímají web jako produkt, ne jako brožuru.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-brand/5 bg-muted/40 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold md:text-3xl">Jak pracujeme</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-4">
            {[
              { n: "01", t: "Objevení", d: "Pracovní workshop, kde zmapujeme cíle, publikum a co znamená úspěch." },
              { n: "02", t: "Návrh", d: "Strategie převedená do design systému a klíčových stránek — recenze brzy a často." },
              { n: "03", t: "Vývoj", d: "Rychlý, sémantický a přístupný kód. Napojení na CMS, aby si tým udržel tempo." },
              { n: "04", t: "Spuštění & péče", d: "Po spuštění zůstáváme blízko, sledujeme výkon a iterujeme tam, kde to dává smysl." },
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
          <h2 className="text-2xl font-bold md:text-3xl">V co věříme</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              ["Řemeslo před objemem", "Ročně spustíme méně webů, aby každý dostal pozornost, kterou potřebuje."],
              ["Výkon je součást designu", "Pomalý web je rozbitý web. Rychlost a přístupnost nejsou volitelné."],
              ["Vše patří vám", "Kód, podklady, obsah — všechno je vaše. Žádná závislost na platformě."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-brand/5 bg-card p-8">
                <h3 className="text-lg font-bold">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start gap-4 border-t border-brand/5 pt-10 md:flex-row md:items-center md:justify-between">
            <p className="text-xl font-bold">Zvědaví na realizace?</p>
            <div className="flex gap-3">
              <Link to="/work" className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-bold text-white">
                Naše realizace
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-brand/15 px-6 py-3 text-sm font-bold">
                Ozvěte se
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
