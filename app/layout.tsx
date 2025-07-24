import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Provider as JotaiProvider } from 'jotai';
import type { PropsWithChildren } from 'react';
import { QueryProvider } from '@/components/query-provider';
import { RootErrorBoundary } from '@/components/root-error-boundry/root-error-boundry';
import { Header } from './_components/header/header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Fake Store',
  description: 'Fake Store',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <QueryProvider>
          <RootErrorBoundary>
            <JotaiProvider>
              <Header />
              {children}
            </JotaiProvider>
          </RootErrorBoundary>
        </QueryProvider>
      </body>
    </html>
  );
}

RootLayout.displayName = 'RootLayout';
