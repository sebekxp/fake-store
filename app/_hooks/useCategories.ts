import { useSuspenseQuery } from '@tanstack/react-query';
import { z } from 'zod';
import { handleFetchError } from '@/app/uitls/handle-fetch-error';
import { categoriesKeys } from '../_queries/queries';

const categoriesSchema = z.array(z.string());

async function fetchCategories() {
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

export function useCategories() {
  return useSuspenseQuery({
    queryKey: categoriesKeys.all,
    queryFn: fetchCategories,
  });
}
