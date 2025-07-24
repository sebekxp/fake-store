'use client';

import { useAtom } from 'jotai';
import { cartItemCountAtom } from '@/app/store/cart';
import styles from './cart-count.module.css';

export function CartCount() {
  const [count] = useAtom(cartItemCountAtom);

  if (!count) {
    return null;
  }

  return (
    <span
      className={count >= 100 ? `${styles.cartBadge} ${styles.cartBadgeLarge}` : styles.cartBadge}
    >
      {count}
    </span>
  );
}

CartCount.displayName = 'CartCount';
