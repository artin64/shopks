'use client';

import { useEffect } from 'react';
import { useThemeStore } from '../store/theme-store';

export function ThemeToggle() {
  const { theme, toggle } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <button className="rounded border px-3 py-1" onClick={toggle}>
      Theme: {theme}
    </button>
  );
}
