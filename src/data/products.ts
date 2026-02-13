import productSofa from "@/assets/product-sofa.jpg";
import productTable from "@/assets/product-table.jpg";
import productChair from "@/assets/product-chair.jpg";
import productTvstand from "@/assets/product-tvstand.jpg";
import productNightstand from "@/assets/product-nightstand.jpg";
import productBookshelf from "@/assets/product-bookshelf.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  category: string;
  image: string;
  description: string;
  features: string[];
  badge?: string;
}

export const categories = [
  "Tous",
  "Canapés",
  "Tables",
  "Fauteuils",
  "Rangement",
  "Chambre",
];

export const products: Product[] = [
  {
    id: "1",
    name: "Canapé Élégance",
    price: 1299,
    oldPrice: 1599,
    category: "Canapés",
    image: productSofa,
    badge: "Promo",
    description: "Un canapé 3 places au design épuré, revêtu d'un tissu beige premium. Confort optimal grâce à sa mousse haute résilience et ses pieds en bois massif.",
    features: ["Tissu premium", "Mousse haute résilience", "Pieds bois massif", "3 places"],
  },
  {
    id: "2",
    name: "Table Harmonie",
    price: 899,
    category: "Tables",
    image: productTable,
    description: "Table à manger en noyer massif sculptée à la main. Son design organique apporte chaleur et caractère à votre salle à manger.",
    features: ["Noyer massif", "Design sculptural", "6-8 personnes", "Finition naturelle"],
  },
  {
    id: "3",
    name: "Fauteuil Sunset",
    price: 649,
    category: "Fauteuils",
    image: productChair,
    badge: "Nouveau",
    description: "Fauteuil d'accent en velours orange brûlé. Son design mid-century modern et ses pieds fuselés en noyer en font une pièce maîtresse.",
    features: ["Velours premium", "Style mid-century", "Pieds noyer", "Assise profonde"],
  },
  {
    id: "4",
    name: "Meuble TV Horizon",
    price: 749,
    category: "Rangement",
    image: productTvstand,
    description: "Meuble TV en noyer avec rangements intégrés. Design contemporain aux lignes épurées, parfait pour un intérieur moderne.",
    features: ["Noyer massif", "3 tiroirs", "Passe-câbles", "160cm largeur"],
  },
  {
    id: "5",
    name: "Table de Chevet Aube",
    price: 299,
    category: "Chambre",
    image: productNightstand,
    description: "Table de chevet en chêne clair au design scandinave. Deux tiroirs pour un rangement pratique et discret.",
    features: ["Chêne clair", "2 tiroirs", "Design scandinave", "Style épuré"],
  },
  {
    id: "6",
    name: "Bibliothèque Géométrie",
    price: 1099,
    oldPrice: 1399,
    category: "Rangement",
    image: productBookshelf,
    badge: "Promo",
    description: "Bibliothèque au design géométrique audacieux, mêlant noyer et métal noir. Une œuvre d'art fonctionnelle pour votre intérieur.",
    features: ["Noyer & métal", "Design géométrique", "Grande capacité", "180cm hauteur"],
  },
];
