'use client';

import * as React from 'react';
import { Languages } from 'lucide-react';
import { useRouter, usePathname } from '@/shared/i18n/routing';

import { Button } from '@/shared/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';

const LANGS = {
  en: 'Eng',
  ua: 'Укр',
} as const;

export default function SwitchLang() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (locale: keyof typeof LANGS) => {
    router.replace(pathname, { locale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" >
        {Object.entries(LANGS).map(([key, label]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => switchLanguage(key as keyof typeof LANGS)} >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}