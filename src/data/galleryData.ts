export type GalleryItem = {
  id: number;
  title: string;
  category: "Birthday" | "Wedding" | "Baby Shower" | "Corporate";
};

export const galleryData: GalleryItem[] = [
  { id: 1, title: "Pink Birthday Setup", category: "Birthday" },
  { id: 2, title: "Elegant Wedding Arch", category: "Wedding" },
  { id: 3, title: "Blue Baby Shower", category: "Baby Shower" },
  { id: 4, title: "Corporate Brand Display", category: "Corporate" },
  { id: 5, title: "Pastel Birthday Backdrop", category: "Birthday" },
  { id: 6, title: "White Wedding Decor", category: "Wedding" },
  { id: 7, title: "Neutral Baby Shower Design", category: "Baby Shower" },
  { id: 8, title: "Company Event Entrance", category: "Corporate" },
];