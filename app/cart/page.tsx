'use client';

import { useAtomValue, useSetAtom } from 'jotai';
import {
  cartItemCountAtom,
  cartItemsAtom,
  cartTotalAtom,
  removeFromCartAtom,
  updateCartItemQuantityAtom,
} from '@/app/store/cart';
import { CartProductList } from './_components/cart-product-list/cart-product-list';
import { EmptyCart } from './_components/empty-cart/empty-cart';
import { Summary } from './_components/summary/summary';
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
    <main>
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
    </main>
  );
}

CartPage.displayName = 'CartPage';
