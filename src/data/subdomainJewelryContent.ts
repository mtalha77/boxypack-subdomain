/**
 * Content for the custom jewelry boxes landing page.
 */

export const subdomainJewelryContent = {
  name: "Jewelry Boxes",
  description:
    "Luxury custom jewelry boxes for rings, necklaces, and accessories. Get a quote for premium packaging that elevates your brand.",
  heroImage: "Box-4_lztqi7",
  modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
  overview: {
    heading: "Product Overview",
    title:
      "Luxury Jewelry Boxes That Turn Unboxing Into an Experience, and Buyers Into Loyal Customers",
    paragraphs: [
      "First impressions decide whether a customer keeps the piece, gifts it with pride, or shares it online. Your jewelry deserves packaging that matches its value, elegant, protective, and unmistakably yours. BoxyPack's custom jewelry boxes are designed to do exactly that: elevate every ring, necklace, earring, and bracelet from the moment the box is opened.",
      "We combine premium materials, rigid board, soft-touch linings, velvet inserts, and magnetic or ribbon closures, with full customization. Choose your size, finish, and branding so every order feels intentional. Whether you sell online, in a boutique, or at wholesale, our jewelry packaging helps you justify premium pricing and build a brand customers remember.",
      "From ring boxes and necklace cases to earring trays and watch boxes, we support the full range of jewelry formats. Soft interiors protect delicate pieces; sturdy construction ensures they arrive and store safely. Add foil stamping, embossing, or full-color print to reinforce your logo and story, so the box doesn't just hold the jewelry; it sells it.",
    ],
  },
} as const;

const CLOUDINARY_CLOUD = "du5lyrqvz";

export function getCloudinaryImageUrl(publicId: string): string {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload/f_auto,q_auto/${publicId}`;
}
