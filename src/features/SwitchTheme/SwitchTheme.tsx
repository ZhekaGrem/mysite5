'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';

import { Button } from '@/shared/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';

export default function SwitchTheme() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon">
          <div className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all hover:text-hover-light dark:-rotate-90 dark:scale-0 dark:hover:text-hover-dark">
            <SunIcon />
          </div>
          <div className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all hover:text-hover-light dark:rotate-0 dark:scale-100 dark:hover:text-hover-dark">
            <MoonIcon />
          </div>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
