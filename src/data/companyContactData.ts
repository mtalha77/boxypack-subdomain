/**
 * Centralized company contact data for landing (header, footer, CTA).
 */

export const companyContactData = {
  phone: "(929) 610-6255",
  phoneHref: "tel:+19296106255",
  salesEmail: "sales@boxypack.com",
  infoEmail: "info@boxypack.com",
  addressUS: "3043 Buhre Avenue The Bronx, NY",
  addressCA: "2782 Barton Street East, 1410, Hamilton, Ontario, L8E2J8, Canada",
  addressUSMapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("3043 Buhre Avenue The Bronx, NY")}`,
  addressCAMapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("2782 Barton Street East, 1410, Hamilton, Ontario, L8E2J8, Canada")}`,
} as const;
