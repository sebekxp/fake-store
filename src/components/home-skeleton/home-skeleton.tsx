import { Skeleton } from '@/components/skeleton/skeleton';
import styles from './home-skeleton.module.css';

export function HomeSkeleton() {
  return (
    <>
      <Skeleton width={200} height={35} className={styles.title} />
      <Skeleton width={250} height={24} />
      <div className={styles.container}>
        {[0, 1, 2, 3].map(key => (
          <div key={key} className={styles.skeletonBox}>
            <Skeleton />
          </div>
        ))}
      </div>
    </>
  );
}

HomeSkeleton.displayName = 'HomeSkeleton';
