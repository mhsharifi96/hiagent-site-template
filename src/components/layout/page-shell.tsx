import {Header} from '@/components/layout/header';
import {Footer} from '@/components/layout/footer';

export async function PageShell({
  locale,
  children
}: {
  locale: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
}
