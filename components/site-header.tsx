'use client';

import { useLanguage } from '@/contexts/language-context';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Moon, Sun, Languages } from 'lucide-react';
import { useEffect, useState } from 'react';

export function SiteHeader() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-end gap-2 px-4">
          <div className="w-20"></div>
          <div className="w-20"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-end gap-2 px-4">
        {/* Language Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Languages className="h-5 w-5" />
              <span className="sr-only">{t('language')}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setLanguage('en')}>
              <span className="flex items-center gap-2">
                {language === 'en' && <span className="text-primary">✓</span>}
                English
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLanguage('es')}>
              <span className="flex items-center gap-2">
                {language === 'es' && <span className="text-primary">✓</span>}
                Español
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Theme Toggle */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme('light')}>
              <span className="flex items-center gap-2">
                {theme === 'light' && <span className="text-primary">✓</span>}
                {t('lightMode')}
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              <span className="flex items-center gap-2">
                {theme === 'dark' && <span className="text-primary">✓</span>}
                {t('darkMode')}
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              <span className="flex items-center gap-2">
                {theme === 'system' && <span className="text-primary">✓</span>}
                System
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
