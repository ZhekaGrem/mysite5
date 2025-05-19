// src/app/[locale]/not-found.tsx
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata(props: { params: { locale: string } }) {
  // Await the params object before destructuring
  const params = await Promise.resolve(props.params);
  const locale = params.locale;
  
  const t = await getTranslations({ locale, namespace: 'Pages.404' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('og.title'),
      description: t('og.description')
    }
  };
}
const NotFound = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
        <p className="mb-4 text-lg text-gray-600">Oops! Looks like you`re lost.</p>
        <div className="animate-bounce">
          <svg
            className="mx-auto h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
          </svg>
        </div>
        <Link href="/">
          <button className="mt-4 shrink-0 rounded-lg border-4 border-solid border-gray-600 p-2 text-gray-600 hover:bg-gray-600">
            Go home!
          </button>
        </Link>
      </div>
    </>
  );
};
export default NotFound;