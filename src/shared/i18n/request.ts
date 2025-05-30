import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { LocaleType } from '@/shared/types/index.types';
import { notFound } from 'next/navigation';

const locales = ['en', 'ua'];

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
  if (!locales.includes(locale as LocaleType)) {
    notFound();
  }
  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as LocaleType)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../../messages/${locale}.json`)).default,
  };
});
