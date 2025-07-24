import { useSuspenseQuery } from '@tanstack/react-query';
import { productsSchema } from '@/app/types/products';
import { handleFetchError } from '@/app/uitls/handle-fetch-error';
import { productsKeys } from '../_queries/queries';

async function fetchProducts(category: string) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`
  );

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
export function useProducts(category: string) {
  return useSuspenseQuery({
    queryKey: productsKeys.list(category),
    queryFn: () => fetchProducts(category),
  });
}
