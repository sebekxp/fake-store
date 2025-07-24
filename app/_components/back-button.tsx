'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button/button';

export function BackButton() {
  const pathname = usePathname();
  const isCategoryPage = pathname.startsWith('/category');
  const isCartPage = pathname.startsWith('/cart');

  if (isCategoryPage || isCartPage) {
    return (
      <Link href="/">
        <Button variant="icon">
          <BackIcon />
        </Button>
      </Link>
    );
  }

  return null;
}
BackButton.displayName = 'BackButton';

function BackIcon() {
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
      strokeLinejoin="round"
      aria-label="Back"
    >
      <title>Back</title>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

BackIcon.displayName = 'BackIcon';
