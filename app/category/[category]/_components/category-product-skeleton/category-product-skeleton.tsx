import { Skeleton } from '@/components/skeleton/skeleton';
import styles from './category-product-skeleton.module.css';

const skeletonKeys = ['s1', 's2', 's3', 's4', 's5', 's6'];

export function CategoryProductSkeleton() {
  return (
    <div>
      <Skeleton height={24} width={200} />
      <div className={styles.grid}>
        {skeletonKeys.map(key => (
          <Skeleton key={key} className={styles.skeletonBox} />
        ))}
      </div>
    </div>
  );
}

CategoryProductSkeleton.displayName = 'CategoryProductSkeleton';
