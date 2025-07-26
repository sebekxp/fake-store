import { handleFetchError } from '@/lib/utils/handle-fetch-error';
import { type Product, productsSchema } from '../types/product.types';

export async function fetchProducts(category: string): Promise<Product[]> {
  const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  try {
    return productsSchema.parse(data);
  } catch (err) {
    handleFetchError(err, 'Product data validation error.');
  }
}
