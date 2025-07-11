export type Product = {
  id: number;
  name: string;
  sku: number;
  price: number;
  const_price: number;
  stock: number;
  brand_id: number;
  category_id: number;
  photo: string | null;
  expired_at: string | null;
  created_at: string;
  updated_at: string;
}