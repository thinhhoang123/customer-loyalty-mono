import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Loyalty',
};

export default async function PublicLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <section className="flex justify-center items-center h-screen">
      {children}
    </section>
  );
}
