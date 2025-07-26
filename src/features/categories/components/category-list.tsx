import Link from 'next/link';
import { Button } from '@/components/ui/button/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card/card';
import styles from './category-list.module.css';

const categoryEmoji: Record<string, string> = {
  electronics: '📱',
  jewelery: '💎',
  "men's clothing": '👔',
  "women's clothing": '👗',
};

interface CategoryListProps {
  data: string[];
}

export function CategoryList({ data }: CategoryListProps) {
  return (
    <div className={styles.container}>
      {data.map(category => (
        <Link
          key={category}
          href={`/category/${encodeURIComponent(category)}`}
          className={styles.link}
        >
          <Card>
            <CardHeader>
              <CardTitle className={styles.cardTitle}>{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={styles.emojiBox}>{categoryEmoji[category] ?? '🛒'}</div>
              <Button>Browse {category}</Button>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

CategoryList.displayName = 'CategoryList';
