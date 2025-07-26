import Image from 'next/image';
import { Button } from '@/components/ui/button/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card/card';
import type { Product } from '@/features/products/types/product.types';
import styles from './product-card.module.css';

interface ProductCardProps {
  product: Product;
  addedCount?: number;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, addedCount, onAddToCart }: ProductCardProps) {
  const handleClick = () => {
    onAddToCart(product);
  };

  return (
    <Card>
      <CardHeader>
        <div className={styles.imageWrapper}>
          <Image
            src={product.image}
            alt={product.title}
            fill
            className={styles.productImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority={false}
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
        <Button onClick={handleClick} className={addedCount ? styles.buttonAdded : undefined}>
          {addedCount ? `Added to cart${addedCount > 1 ? ` (${addedCount})` : ''}` : 'Add to Cart'}
        </Button>
      </div>
    </Card>
  );
}

ProductCard.displayName = 'ProductCard';
