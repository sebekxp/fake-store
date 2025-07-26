import { handleFetchError } from '@/lib/utils/handle-fetch-error';
import { categoriesSchema } from '../types/categories.types';

export async function fetchCategories() {
  const res = await fetch('https://fakestoreapi.com/products/categories');

  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  try {
    return categoriesSchema.parse(data);
  } catch (err) {
    handleFetchError(err, 'Category data validation error.');
  }
}
