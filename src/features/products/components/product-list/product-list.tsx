'use client';

import { useSetAtom } from 'jotai';
import { useEffect, useRef, useState, useTransition } from 'react';
import { addToCartAtom } from '@/features/cart/store/cart-store';
import type { Product } from '@/features/products/types/product.types';
import { ProductCard } from '../product-card/product-card';
import styles from './product-list.module.css';

interface ProductListProps {
  data: Product[];
}

export function ProductList({ data }: ProductListProps) {
  const addToCart = useSetAtom(addToCartAtom);
  const [addedCounts, setAddedCounts] = useState<Record<number, number>>({});
  const timeoutsRef = useRef<Record<number, NodeJS.Timeout>>({});
  const [, startTransition] = useTransition();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAddedCounts(prev => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));

    if (timeoutsRef.current[product.id]) {
      clearTimeout(timeoutsRef.current[product.id]);
    }

    timeoutsRef.current[product.id] = setTimeout(() => {
      startTransition(() => {
        setAddedCounts(prev => {
          const { [product.id]: _, ...rest } = prev;
          return rest;
        });
      });
    }, 1500);
  };

  useEffect(() => {
    return () => {
      Object.values(timeoutsRef.current).forEach(clearTimeout);
    };
  }, []);

  if (!data?.length) {
    return <p>No products found.</p>;
  }

  return (
    <section>
      <p>{data.length} products found</p>
      <div className={styles.grid}>
        {data.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addedCount={addedCounts[product.id]}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

ProductList.displayName = 'ProductList';
