import Link from 'next/link';
import { Button } from '@/components/ui/button/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card/card';
import styles from './summary.module.css';

interface SummaryProps {
  totalItems: number;
  totalPrice: number;
}

export function Summary({ totalItems, totalPrice }: SummaryProps) {
  return (
    <aside className={styles.summaryCol} aria-label="Summary of the cart">
      <Card>
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent className={styles.summaryContent}>
          <dl>
            <div className={styles.summaryRow}>
              <dt>Products ({totalItems})</dt>
              <dd>${totalPrice.toFixed(2)}</dd>
            </div>
            <div className={styles.summaryRow}>
              <dt>Delivery</dt>
              <dd>Free</dd>
            </div>
            <div className={styles.summaryTotalRow}>
              <dt>Sum</dt>
              <dd className={styles.summaryTotal}>${totalPrice.toFixed(2)}</dd>
            </div>
          </dl>
          <Button className={styles.checkoutBtn} type="button" aria-label="Go to checkout">
            Go to checkout
          </Button>
          <Link href="/">
            <Button type="button" aria-label="Continue shopping">
              Continue shopping
            </Button>
          </Link>
        </CardContent>
      </Card>
    </aside>
  );
}

Summary.displayName = 'Summary';
