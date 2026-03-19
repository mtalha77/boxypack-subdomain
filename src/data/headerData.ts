/**
 * Header config for landing (logo only).
 */

export const headerConfig = {
  logo: {
    iconPath: "logo-vertical_zkxna0",
    alt: "Boxypack",
    width: 200,
    height: 100,
  },
} as const;

const CLOUDINARY_CLOUD = "du5lyrqvz";

export function getLogoUrl(): string {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload/f_auto,q_auto/${headerConfig.logo.iconPath}`;
}
