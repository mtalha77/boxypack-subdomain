/**
 * Shared type for product landing pages (Jewelry, Gift Box with Lid, Candle Boxes, etc.)
 */

export interface LandingPageMaterialsUsed {
  title: string;
  paragraph1: string;
  paragraph2: string;
  features: string[];
}

export interface LandingPageOverview {
  heading: string;
  title: string;
  paragraphs: string[];
  images: string[];
}

export interface LandingPageWhyChooseUs {
  eyebrow: string;
  heading: string;
  features: Array<{ icon: string; title: string; description: string }>;
  closingDescription: string;
}

export interface LandingPageFAQItem {
  question: string;
  answer: string;
}

export interface LandingPageCTA {
  title: string;
  description: string;
}

export interface LandingPageData {
  meta: { title: string; description: string };
  name: string;
  description: string;
  heroImage: string;
  heroImages?: string[];
  modelPath?: string;
  materialsUsed: LandingPageMaterialsUsed | null;
  overview: LandingPageOverview;
  keyFeatures?: string[];
  customization?: { details: Array<{ label: string; value: string }> };
  whyChooseUs?: LandingPageWhyChooseUs | null;
  faq: LandingPageFAQItem[];
  cta: LandingPageCTA;
  subcategories: Array<{ name: string; slug: string }>;
  /** Base path on main site for "Our Range" links, e.g. jewelry-boxes, gift-boxes, candle-boxes */
  mainSiteCategoryPath: string;
  /** Image public IDs for the quote/dimension form (e.g. 5 product images). Falls back to heroImages if omitted. */
  quoteFormImages?: string[];
}
