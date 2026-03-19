/**
 * Jewelry Boxes page content – matches main site
 * https://www.boxypack.com/products/product-by-industry/jewelry-boxes
 */

export const jewelryBoxesPageData = {
  // Metadata (main site)
  meta: {
    title: "Custom Jewelry Boxes | Premium Elegant Packaging",
    description:
      "Boxy Pack delivers premium jewelry boxes with fast turnaround, free shipping, and stylish designs to enhance the presentation of all jewelry items. Order Now.",
  },

  // Hero & product (productPagesData["jewelry-boxes"])
  name: "Jewelry Boxes",
  description:
    "Elegant, durable, and made to shine. Buy jewelry boxes wholesale for secure storage, flawless gifting, and premium presentation that highlights every piece.",
  heroImage: "Ring-Box-5_sgqtcn",
  heroImages: [
    "Ring-Box-5_sgqtcn",
    "Ring-Box-4_ecu6ob",
    "Ring-Box-2_olhgty",
  ],
  modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",

  // Materials used (categoryMaterialData["jewelry-boxes"] – main site)
  materialsUsed: {
    title: "What Materials Are Used in Our Jewelry Boxes?",
    paragraph1:
      "Our jewelry boxes are made from high-quality rigid board and specialty papers that balance protection with beauty. Each box features a strong outer shell and a soft inner lining for premium presentation.",
    paragraph2:
      "Every material is selected to ensure your jewelry boxes deliver both durability and sophistication while remaining sustainable.",
    features: [
      "Rigid Chipboard for structure and luxury appeal",
      "Velvet and Satin Linings for elegant interiors",
      "Kraft Paperboard for eco-friendly jewelry packaging boxes",
      "Cardboard Inserts for product stability",
      "Magnetic Closures for a sleek unboxing experience",
    ],
  },

  // Product overview (productPagesData["jewelry-boxes"].overview)
  // overviewImages: same as main site ProductOverview for jewelry-boxes (first subcategory = Anklet Box, skip hero)
  overview: {
    heading: "Product Overview",
    title: "Custom Jewelry Packaging Boxes Wholesale",
    paragraphs: [
      "Our jewelry boxes are crafted to combine elegance and protection in every design. Ideal for rings, earrings, necklaces, and watches, these boxes enhance product appeal while ensuring safety during storage or transit. Every detail from lining to closure adds a touch of sophistication that your customers notice instantly.",
      "At BoxyPack, we create custom jewelry packaging boxes wholesale that express your brand's personality. Whether you need velvet-coated ring boxes, rigid necklace cases, or minimal kraft jewelry boxes, we customize each to suit your brand's vision.",
      "As a luxury jewelry boxes supplier near me, we offer fine finishes, durable materials, and affordable jewelry boxes prices that meet retail and wholesale needs with equal perfection.",
    ],
    images: [
      "Anklet-Box-2_vhewbx",
      "Anklet-Box-3_leehdu",
      "Anklet-Box-4_hutlxw",
    ],
  },

  // Key features (productPagesData["jewelry-boxes"].keyFeatures)
  keyFeatures: [
    "Soft-touch interiors that protect delicate jewelry",
    "Rigid structure for a premium look and long-term use",
    "Custom printing and embossing for branding and elegance",
    "Available in matte, gloss, or velvet finishes",
    "Eco-friendly materials with sustainable design options",
    "Magnetic and ribbon closures for a luxury feel",
    "Perfect for jewelers, boutiques, and online sellers",
  ],

  // Customization (productPagesData["jewelry-boxes"].customization)
  customization: {
    details: [
      { label: "Material Type", value: "Rigid greyboard with wrapped papers or premium coated stocks" },
      { label: "Structure", value: "Lift-off lid, book-style, drawer/sleeve, magnetic closure" },
      { label: "Thickness", value: "2.0–3.0 mm rigid board with custom insert options" },
      { label: "Finish", value: "Soft-touch lamination, velvet wrap, foil, emboss/deboss" },
      { label: "Printing", value: "Inside, Outside, or Both" },
      { label: "Dimensions (L x W x H)", value: "10 × 6 × 4" },
      { label: "Quantity", value: "250 units (Bulk discounts available)" },
    ],
  },

  // Why Choose Us (whyChooseUsData["jewelry-boxes"])
  whyChooseUs: {
    eyebrow: "Why Choose Our Jewelry Boxes",
    heading:
      "At BoxyPack, we turn packaging into presentation. Our eco-friendly jewelry packaging boxes are designed to reflect quality and style while keeping your items secure.",
    features: [
      { icon: "shield", title: "Elegant Presentation", description: "High-end finishes for a lasting impression." },
      { icon: "check", title: "Sustainable Materials", description: "Designed with recyclable and biodegradable components." },
      { icon: "star", title: "Full Customization", description: "Add colors, logos, and unique textures." },
      { icon: "palette", title: "Affordable Pricing", description: "Get the best jewelry box price for large or custom orders." },
    ],
    closingDescription: "We create packaging that adds confidence and class to every jewelry collection.",
  },

  // FAQ (productPagesData["jewelry-boxes"].faq)
  faq: [
    {
      question: "What are jewelry boxes used for?",
      answer:
        "They are used for storing, protecting, and presenting jewelry items such as rings, earrings, and necklaces.",
    },
    {
      question: "Can I add custom branding to jewelry boxes?",
      answer:
        "Yes, BoxyPack offers printing, embossing, and foil stamping for custom jewelry packaging boxes wholesale.",
    },
    {
      question: "Are your jewelry boxes eco-friendly?",
      answer:
        "Yes, we produce eco-friendly jewelry packaging boxes using recyclable and sustainable materials.",
    },
    {
      question: "Do you sell jewelry boxes in bulk?",
      answer:
        "Yes, you can buy jewelry boxes online in bulk at discounted wholesale prices.",
    },
    {
      question: "What determines the jewelry boxes price?",
      answer:
        "The jewelry boxes price depends on the material type, finish, size, and order volume.",
    },
  ],

  // CTA (productPagesData["jewelry-boxes"].cta)
  cta: {
    title: "Exceptional Design That Leaves a Lasting Impression",
    description:
      "Reach out to BoxyPack today for custom jewelry boxes that elevate your brand and protect your pieces in style. Our design team is ready to create elegant, durable, and sustainable packaging tailored to your needs. Contact us now to begin your order and showcase your jewelry the right way.",
  },

  // Our Range / subcategories (productByIndustryData jewelry-boxes subcategories)
  subcategories: [
    { name: "Anklet Box", slug: "anklet-boxes" },
    { name: "Velvet Bags", slug: "velvet-bags" },
    { name: "Jewelry Subscription Box", slug: "jewelry-subscription-box" },
    { name: "Pendant Box", slug: "pendant-boxes" },
    { name: "Bracelet Box", slug: "bracelet-boxes" },
    { name: "Ring Box", slug: "ring-boxes" },
    { name: "Earring Box", slug: "earring-boxes" },
    { name: "Luxury Jewelry Packaging", slug: "luxury-jewelry-packaging" },
    { name: "Necklace Box", slug: "necklace-boxes" },
    { name: "Small Jewelry Box", slug: "small-jewelry-boxes" },
    { name: "Necklace Cards", slug: "necklace-cards" },
    { name: "Jewelry Bags", slug: "jewelry-bags" },
  ],

  mainSiteCategoryPath: "jewelry-boxes",

  quoteFormImages: [
    "Ring-Box-5_sgqtcn",
    "Ring-Box-4_ecu6ob",
    "Ring-Box-2_olhgty",
    "Ring-Box-3_qgpnzt",
    "Ring-Box-1_tiz90t",
  ],
} as const;

export { getCloudinaryUrl as getJewelryCloudinaryUrl } from "@/data/cloudinary";
