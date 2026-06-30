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
    category: "E-commerce • Design & Development",
    year: "2024",
    summary:
      "A made-to-order furniture brand needed a storefront that felt as crafted as the pieces themselves. We rebuilt their catalogue, checkout, and editorial sections from the ground up.",
    image: archi,
    tags: ["Shopify", "Design system", "Motion"],
  },
  {
    slug: "studio-koda",
    title: "Studio Koda",
    category: "Architecture Portfolio",
    year: "2024",
    summary:
      "An award-winning architecture practice wanted their work to speak first. We built a quiet, image-led portfolio with carefully tuned typography and a fast, image-optimized stack.",
    image: koda,
    tags: ["Next.js", "Headless CMS", "Editorial"],
  },
  {
    slug: "lumen",
    title: "Lumen Skincare",
    category: "Brand & E-commerce",
    year: "2024",
    summary:
      "A new clean-beauty label needed to launch in 8 weeks. We shaped the brand voice, built the storefront, and integrated subscriptions — in time for a sold-out drop.",
    image: lumen,
    tags: ["Brand", "Shopify Plus", "Subscriptions"],
  },
  {
    slug: "folio",
    title: "Folio Magazine",
    category: "Editorial Platform",
    year: "2023",
    summary:
      "An independent culture magazine moving from print to digital. We designed an article system that respects long-form reading and gives editors real typographic control.",
    image: folio,
    tags: ["Sanity", "Editorial", "Accessibility"],
  },
  {
    slug: "hearth",
    title: "Hearth Coffee Roasters",
    category: "E-commerce • Branding",
    year: "2023",
    summary:
      "A specialty roaster wanted a site as warm as their café. We paired tactile photography with a frictionless single-page checkout and a wholesale portal.",
    image: hearth,
    tags: ["Storefront", "Wholesale", "CMS"],
  },
  {
    slug: "tempo",
    title: "Tempo Strength",
    category: "Booking Platform",
    year: "2023",
    summary:
      "A boutique strength studio replaced three off-the-shelf tools with one custom booking experience — faster reservations and a much happier front desk.",
    image: tempo,
    tags: ["Bookings", "Stripe", "App-like"],
  },
];
