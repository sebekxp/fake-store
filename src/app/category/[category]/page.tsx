import type { Metadata } from 'next';
import { fetchCategories } from '@/features/categories/api/categories.api';
import { fetchProducts } from '@/features/products/api/products.api';
import { ProductList } from '@/features/products/components/product-list/product-list';

/**
 * Products can be changed frequently, so we can revalidate them every 5 minutes.
 */
export const revalidate = 300;

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  const categories = await fetchCategories();
  return categories.map(category => ({ category }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);

  return {
    title: `Fake Store | ${decodedCategory}`,
    description: `Products from ${decodedCategory} category`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);
  const data = await fetchProducts(decodedCategory);

  return (
    <>
      <header>
        <h1>{decodedCategory}</h1>
      </header>
      <ProductList data={data} />
    </>
  );
}

CategoryPage.displayName = 'CategoryPage';
