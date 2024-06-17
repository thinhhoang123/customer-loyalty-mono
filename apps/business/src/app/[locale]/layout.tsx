import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import AntTheme from '@repo/ui/AntTheme';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Customer Loyalty',
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <AntTheme>
          <NextIntlClientProvider messages={messages}>
            <main>{children}</main>
          </NextIntlClientProvider>
        </AntTheme>
      </body>
    </html>
  );
}

