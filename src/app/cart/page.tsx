'use client';

import { useAtomValue, useSetAtom } from 'jotai';
import { CartProductList } from '@/features/cart/components/cart-product-list/cart-product-list';
import { EmptyCart } from '@/features/cart/components/empty-cart/empty-cart';
import { Summary } from '@/features/cart/components/summary/summary';
import {
  cartItemCountAtom,
  cartItemsAtom,
  cartTotalAtom,
  removeFromCartAtom,
  updateCartItemQuantityAtom,
} from '@/features/cart/store/cart-store';
import styles from './page.module.css';

export default function CartPage() {
  const cart = useAtomValue(cartItemsAtom);
  const totalItems = useAtomValue(cartItemCountAtom);
  const totalPrice = useAtomValue(cartTotalAtom);
  const updateQuantity = useSetAtom(updateCartItemQuantityAtom);
  const removeFromCart = useSetAtom(removeFromCartAtom);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <>
      <header className={styles.headerInner}>
        <h1>Cart</h1>
        <p>
          {totalItems} {totalItems === 1 ? 'product' : 'products'}
        </p>
      </header>
      <div className={styles.grid}>
        <CartProductList
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
        <Summary totalItems={totalItems} totalPrice={totalPrice} />
      </div>
    </>
  );
}

CartPage.displayName = 'CartPage';
