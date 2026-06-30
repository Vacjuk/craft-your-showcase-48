import archi from "@/assets/work-archi.jpg";
import koda from "@/assets/work-koda.jpg";
import lumen from "@/assets/work-lumen.jpg";
import folio from "@/assets/work-folio.jpg";
import hearth from "@/assets/work-hearth.jpg";
import tempo from "@/assets/work-tempo.jpg";

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  image: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "archi",
    title: "Archi Furniture",
    category: "E-shop • Design & vývoj",
    year: "2024",
    summary:
      "Značka nábytku na zakázku potřebovala obchod, který bude působit stejně řemeslně jako její kusy. Od základu jsme přestavěli katalog, pokladnu i redakční sekce.",
    image: archi,
    tags: ["Shopify", "Design systém", "Animace"],
  },
  {
    slug: "studio-koda",
    title: "Studio Koda",
    category: "Architektonické portfolio",
    year: "2024",
    summary:
      "Oceňované architektonické studio chtělo, aby mluvily především jejich realizace. Postavili jsme tiché portfolio vedené obrazem s pečlivě vyladěnou typografií a rychlou, obrazově optimalizovanou architekturou.",
    image: koda,
    tags: ["Next.js", "Headless CMS", "Editorial"],
  },
  {
    slug: "lumen",
    title: "Lumen Skincare",
    category: "Značka & e-shop",
    year: "2024",
    summary:
      "Nová clean-beauty značka potřebovala vyrazit na trh za 8 týdnů. Vytvořili jsme tone of voice, postavili e-shop a integrovali předplatné — vše stihli na vyprodanou kolekci.",
    image: lumen,
    tags: ["Brand", "Shopify Plus", "Předplatné"],
  },
  {
    slug: "folio",
    title: "Folio Magazine",
    category: "Redakční platforma",
    year: "2023",
    summary:
      "Nezávislý kulturní magazín přecházel z tisku do digitálu. Navrhli jsme článkový systém, který respektuje dlouhé čtení a dává redaktorům reálnou typografickou kontrolu.",
    image: folio,
    tags: ["Sanity", "Editorial", "Přístupnost"],
  },
  {
    slug: "hearth",
    title: "Hearth Coffee Roasters",
    category: "E-shop • Branding",
    year: "2023",
    summary:
      "Specializovaná pražírna chtěla web tak vřelý jako jejich kavárnu. Spojili jsme hmatovou fotografii s plynulou jednostránkovou pokladnou a velkoobchodním portálem.",
    image: hearth,
    tags: ["Storefront", "Velkoobchod", "CMS"],
  },
  {
    slug: "tempo",
    title: "Tempo Strength",
    category: "Rezervační platforma",
    year: "2023",
    summary:
      "Butikové silové studio nahradilo tři krabicové nástroje jediným rezervačním systémem na míru — rychlejší rezervace a mnohem spokojenější recepce.",
    image: tempo,
    tags: ["Rezervace", "Stripe", "App-like"],
  },
];
