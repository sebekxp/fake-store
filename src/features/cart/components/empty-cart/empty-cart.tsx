import Link from 'next/link';
import { Button } from '@/components/ui/button/button';
import styles from './empty-cart.module.css';

export function EmptyCart() {
  return (
    <main>
      <div className={styles.emptyBox}>
        <div className={styles.emptyIcon}>🛒</div>
        <h2>Your cart is empty</h2>
        <p className={styles.emptyText}>Start shopping to add products to your cart</p>
        <Link href="/">
          <Button>Continue shopping</Button>
        </Link>
      </div>
    </main>
  );
}

EmptyCart.displayName = 'EmptyCart';
