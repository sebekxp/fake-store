import type { Metadata } from 'next';
import { Suspense } from 'react';
import { CategoryProductSkeleton } from './_components/category-product-skeleton/category-product-skeleton';
import { ProductList } from './_components/product-list';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
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

  return (
    <main>
      <header>
        <h1>{decodedCategory}</h1>
      </header>
      <Suspense fallback={<CategoryProductSkeleton />}>
        <ProductList category={decodedCategory} />
      </Suspense>
    </main>
  );
}

CategoryPage.displayName = 'CategoryPage';
