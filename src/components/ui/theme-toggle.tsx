'use client';

import {Moon, Sun} from 'lucide-react';
import {useTheme} from 'next-themes';
import {Button} from '@/components/ui/button';

export function ThemeToggle() {
  const {theme, resolvedTheme, setTheme} = useTheme();

  const activeTheme = theme === 'system' ? resolvedTheme : theme;
  const isDark = activeTheme === 'dark';

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
