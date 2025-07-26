import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/globals.css';
import { Provider as JotaiProvider } from 'jotai';
import type { PropsWithChildren } from 'react';
import { Header } from '../components/header/header';

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
        <JotaiProvider>
          <Header />
          <main>{children}</main>
        </JotaiProvider>
      </body>
    </html>
  );
}

RootLayout.displayName = 'RootLayout';
