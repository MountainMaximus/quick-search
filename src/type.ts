export interface Product {
  id: 1;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface SearchResult {
  products: Product[];
  category?: Record<string, number>;
}
