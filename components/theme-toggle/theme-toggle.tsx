'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button/button';
import styles from './theme-toggle.module.css';

type Theme = 'light' | 'dark' | 'auto';

const getSystemTheme = (): 'dark' | 'light' =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.classList.remove('dark-theme', 'light-theme');
  if (theme !== 'auto') root.classList.add(`${theme}-theme`);
};

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('auto');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'auto';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme =
      theme === 'auto'
        ? getSystemTheme() === 'dark'
          ? 'light'
          : 'dark'
        : theme === 'dark'
          ? 'light'
          : 'dark';

    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <Button
      className={styles.themeToggle}
      onClick={toggleTheme}
      variant="icon"
      aria-label="Toggle theme"
    >
      <svg
        className={styles.toggleIcon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    </Button>
  );
}

ThemeToggle.displayName = 'ThemeToggle';
