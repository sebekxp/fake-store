import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle/theme-toggle';
import { Button } from '@/components/ui/button/button';
import { BackButton } from '../back-button';
import { CartCount } from '../cart-count/cart-count';
import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.headerActions}>
            <BackButton />
            <h1 className={styles.title}>Fake Store</h1>
            <ThemeToggle />
          </div>
          <Link href="/cart">
            <Button variant="icon" className={styles.cartButton}>
              <div className={styles.cartButtonIconWrapper}>
                <CartIcon />
                <CartCount />
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

Header.displayName = 'Header';

function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-label="Shopping cart"
      strokeLinejoin="round"
      className="lucide lucide-shopping-cart-icon lucide-shopping-cart"
    >
      <title>Shopping cart</title>
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

CartIcon.displayName = 'CartIcon';
