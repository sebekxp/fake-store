import type React from 'react';
import styles from './skeleton.module.css';

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export function Skeleton({ width, height, className = '', style = {} }: SkeletonProps) {
  return (
    <span
      className={`${styles.skeleton} ${className}`.trim()}
      style={{ width, height, ...style }}
      aria-busy="true"
      aria-live="polite"
    />
  );
}

Skeleton.displayName = 'Skeleton';
