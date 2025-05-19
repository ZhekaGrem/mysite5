'use client';

import * as React from 'react';
import { useRouter, usePathname } from '@/shared/i18n/routing';
import LangIcon from './LangIcon';
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
        <Button variant="secondary" size="icon">
          <div className="h-[1.2rem] w-[1.2rem]">
            <LangIcon />
          </div>
          <span className="sr-only">Change Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(LANGS).map(([key, label]) => (
          <DropdownMenuItem key={key} onClick={() => switchLanguage(key as keyof typeof LANGS)} className="">
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
