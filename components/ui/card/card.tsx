import type React from 'react';
import styles from './card.module.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function Card({ className = '', style, ...props }: CardProps) {
  return <div className={`${styles.card} ${className}`.trim()} style={style} {...props} />;
}
Card.displayName = 'Card';

function CardHeader({ className = '', style, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`${styles.header} ${className}`.trim()} style={style} {...props} />;
}
CardHeader.displayName = 'CardHeader';

function CardTitle({ className = '', style, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={`${styles.title} ${className}`.trim()} style={style} {...props} />;
}
CardTitle.displayName = 'CardTitle';

function CardContent({ className = '', style, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`${styles.content} ${className}`.trim()} style={style} {...props} />;
}
CardContent.displayName = 'CardContent';

export { Card, CardHeader, CardTitle, CardContent };
