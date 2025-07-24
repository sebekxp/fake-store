import type { Metadata } from 'next';
import { Suspense } from 'react';
import { CategoryList } from './_components/category-list/category-list';
import { HomeSkeleton } from './_components/home-skeleton/home-skeleton';

export const metadata: Metadata = {
  title: 'Fake Store | Home',
  description: 'Fake Store Home',
};

export default function HomePage() {
  return (
    <main>
      <header>
        <h1>Shop by Category</h1>
        <p>Browse our collection of products by category</p>
      </header>
      <Suspense fallback={<HomeSkeleton />}>
        <CategoryList />
      </Suspense>
    </main>
  );
}

HomePage.displayName = 'HomePage';
