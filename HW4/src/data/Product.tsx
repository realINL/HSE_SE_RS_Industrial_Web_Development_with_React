import { Category } from "./Category";

export type Product = {
  id: string;
  name: string;
  description: string;
  category: Category;
  quantity: number;
  unit: string;
  price: number;
  image?: string;
};