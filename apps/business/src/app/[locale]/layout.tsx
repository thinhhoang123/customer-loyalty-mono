import { MantineProvider } from '@mantine/core';
import '../../styles/global.css';
import '@mantine/core/styles.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import theme from '../../constants/theme';

export const metadata = {
  title: 'Welcome to Customer Loyalty',
  description: 'Generated by create-nx-workspace',
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
      <body>
        <NextIntlClientProvider messages={messages}>
          <MantineProvider theme={theme} defaultColorScheme="auto">
            {children}
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
