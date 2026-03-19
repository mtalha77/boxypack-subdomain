const CLOUDINARY_CLOUD = "du5lyrqvz";

export function getCloudinaryUrl(publicId: string): string {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload/f_auto,q_auto/${publicId}`;
}
