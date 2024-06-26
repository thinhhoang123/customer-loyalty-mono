import { AppLayout } from '@customer-loyalty-nx/ui';
import NavItems from '../../../constants/navItems';

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppLayout navItems={NavItems}>
      <main>{children}</main>
    </AppLayout>
  );
}
