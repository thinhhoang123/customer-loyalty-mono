import { MantineProvider } from '@mantine/core';
import './global.css';
import '@mantine/core/styles.css';

export const metadata = {
  title: 'Welcome to business',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
