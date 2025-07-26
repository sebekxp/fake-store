import type { Metadata } from 'next';
import { fetchCategories } from '@/features/categories/api/categories.api';
import { CategoryList } from '@/features/categories/components/category-list';

/**
 * Categories can be changed rarely, so we can revalidate them every hour.
 */
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Fake Store | Home',
  description: 'Fake Store Home',
};

export default async function HomePage() {
  const data = await fetchCategories();

  return (
    <>
      <header>
        <h1>Shop by Category</h1>
        <p>Browse our collection of products by category</p>
      </header>
      <CategoryList data={data} />
    </>
  );
}

HomePage.displayName = 'HomePage';
