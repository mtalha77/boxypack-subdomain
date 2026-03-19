/**
 * Shared landing content: testimonials and FAQ data.
 */

export interface TestimonialCard {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
}

export const sharedTestimonials: TestimonialCard[] = [
  {
    id: 1,
    name: "Sarah J.",
    company: "EcoFashion Co.",
    role: "Marketing",
    content:
      "Our unboxing used to be pretty blah. Now people actually post it. Sales are up. Really happy with them.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "TechGadgets Inc.",
    role: "CEO",
    content:
      "We needed something that looked premium as soon as it showed up. They delivered. Fast turnaround, clear pricing, we already did a second order. No runaround, just good boxes.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily R.",
    company: "Beauty Essentials",
    role: "Founder",
    content:
      "Tried them once to see. Quality and the little details won us over. Now we use them for every launch. Customers keep saying they love the packaging.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    company: "Luxury Goods Ltd.",
    role: "Ops",
    content:
      "Good from start to finish. We look high end without all the hassle. Would recommend.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Wang",
    company: "Artisan Crafts",
    role: "Creative Director",
    content:
      "I was nervous ordering custom boxes online, we had a bad experience with someone else before. They got us the proof in a day, we approved it, boxes came before our pop-up. Really solid board and the finish is nice. We've done three orders since. They get what we're going for.",
    rating: 5,
  },
  {
    id: 6,
    name: "James Miller",
    company: "Candle & Co.",
    role: "Owner",
    content:
      "Sturdy, looks good, came when they said. Repeat orders went up after we switched. Easy to work with, we'll keep ordering.",
    rating: 5,
  },
];

export const faqData = [
  {
    question: "Can I get an instant quote for my order?",
    answer:
      "Yes, you can get an instant quote right from our website. Just choose your box size, material, and quantity, and our system will calculate pricing in real time. You can also upload your logo or artwork to see how it fits your design. This helps you know the exact cost before ordering, saving time and avoiding surprises later. Our support team can guide you through any special quote requests.",
  },
  {
    question: "What types of packaging can I order from BoxyPack?",
    answer:
      "At BoxyPack, you can order a wide range of custom packaging boxes including mailer boxes, rigid boxes, folding cartons, and shipping boxes. Each style is fully customizable in size, color, and material. Whether you need strong packaging for deliveries or stylish retail boxes for store displays, we've got you covered. Every box type is designed to protect your products while reflecting your brand's identity.",
  },
  {
    question: "How does the online 3D design tool work?",
    answer:
      "Our 3D design tool helps you see your box come to life before you order. You can upload your artwork, add your logo, and choose colors or finishes. As you make changes, the preview updates instantly so you can see exactly how your custom packaging boxes will look. It also shows live pricing updates, giving you full control over both design and budget, all in one easy-to-use tool.",
  },
  {
    question: "Can I submit my own design file?",
    answer:
      "Yes, absolutely. Suppose you've already created a design using Adobe Illustrator or any other design software. In that case, you can upload your dieline directly through our website. Our design team reviews every file carefully for print accuracy, bleed areas, and resolution. If we notice anything that might affect print quality, we'll reach out before production starts. This ensures your custom boxes look exactly how you imagined: sharp, clean, and professional.",
  },
  {
    question: "Will I receive a proof before production?",
    answer:
      "Yes, you'll always receive a digital proof before we print anything. Within 24 hours of placing your order, our prepress team will send you a 2D preview showing your final box layout. You can review every detail, logo placement, color alignment, and text spacing before giving approval. Once you're fully satisfied, production begins. This step ensures your custom packaging boxes are printed perfectly the first time.",
  },
  {
    question: "How long will my order take?",
    answer:
      "Most standard orders take about 10 business days for production after proof approval. Rush orders can be completed in around 7 business days. Shipping time depends on your location, usually between 1 to 7 days. If you're working with a deadline, our team can help you plan your order to make sure it arrives on time. Every BoxyPack order is tracked from production to delivery.",
  },
  {
    question: "Can you print inside the boxes, too?",
    answer:
      "Yes, we can print both inside and outside of your custom packaging boxes. Inside printing creates a great unboxing experience and adds an extra touch of creativity. You can print brand messages, patterns, or product instructions on the interior panels. It's perfect for brands that want customers to feel something special when opening their package. Our team can help you design both sides for a seamless, branded look.",
  },
  {
    question: "How can I be sure my artwork is printable?",
    answer:
      "Before printing, our expert prepress team reviews your artwork carefully. We check image resolution, color setup, alignment, and bleed areas to make sure every design prints clearly. If we spot any issues that might reduce print quality, we'll contact you with suggestions. You'll get a digital proof to approve before anything goes to print, ensuring your custom boxes look professional and match your brand colors perfectly.",
  },
  {
    question: "What factors affect my box pricing?",
    answer:
      "The main factors that affect pricing include your box size, material type, ink coverage, and order quantity. Larger boxes or full-color prints may cost slightly more, while bulk orders often qualify for lower unit pricing. We also consider any custom add-ons like foil, embossing, or lamination. At BoxyPack, we're transparent about all pricing. You can get an instant estimate online or contact us for a tailored quote.",
  },
  {
    question: "What makes BoxyPack different from other packaging companies?",
    answer:
      "BoxyPack focuses on both creativity and quality. We make every box to fit your product, not a standard template. Our team uses premium materials, modern printing, and detailed finishing to make sure every order looks professional and lasts long. We also provide personal support from design to delivery. Whether you're ordering 50 boxes or 5,000, you'll get the same attention, care, and consistent results that keep customers returning.",
  },
] as const;
