'use client';

import { useSetAtom } from 'jotai';
import Image from 'next/image';
import { useRef, useState, useTransition } from 'react';
import { addToCartAtom } from '@/app/store/cart';
import type { Product } from '@/app/types/products';
import { Button } from '@/components/ui/button/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card/card';
import { useProducts } from '../_hooks/useProducts';
import styles from './product-list.module.css';

interface ProductListProps {
  category: string;
}

export function ProductList({ category }: ProductListProps) {
  const { data } = useProducts(category);
  const addToCart = useSetAtom(addToCartAtom);
  const [addedCounts, setAddedCounts] = useState<Record<number, number>>({});
  const timeoutsRef = useRef<Record<number, NodeJS.Timeout>>({});
  const [, startTransition] = useTransition();

  if (!data?.length) {
    return <p>No products found.</p>;
  }

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAddedCounts(prev => {
      const current = prev[product.id] || 0;
      return { ...prev, [product.id]: current + 1 };
    });

    if (timeoutsRef.current[product.id]) {
      clearTimeout(timeoutsRef.current[product.id]);
    }

    timeoutsRef.current[product.id] = setTimeout(() => {
      startTransition(() => {
        setAddedCounts(prev => {
          // Remove the count for this product from the state object.
          // This effectively hides the "Added!" state for this product after the timeout.
          // We use object destructuring to omit the product.id key from the state.
          const { [product.id]: _, ...rest } = prev;
          return rest;
        });
      });
    }, 1500);
  };

  return (
    <section style={{ position: 'relative' }}>
      <p>{data.length} products found</p>
      <div className={styles.grid}>
        {data.map(product => (
          <Card key={product.id}>
            <CardHeader>
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className={styles.productImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className={styles.cardTitle}>{product.title}</CardTitle>
              <div className={styles.priceRow}>
                <p className={styles.price}>${product.price.toFixed(2)}</p>
                <p className={styles.rating}>
                  ⭐ {product.rating.rate} ({product.rating.count})
                </p>
              </div>
            </CardContent>
            <div className={styles.buttonBox}>
              <Button
                onClick={() => handleAddToCart(product)}
                style={
                  addedCounts[product.id]
                    ? {
                        backgroundColor: '#28a745',
                        color: '#fff',
                        borderColor: '#28a745',
                      }
                    : undefined
                }
              >
                {addedCounts[product.id]
                  ? `Added to cart${
                      addedCounts[product.id] > 1 ? ` (${addedCounts[product.id]})` : ''
                    }`
                  : 'Add to Cart'}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

ProductList.displayName = 'ProductList';
