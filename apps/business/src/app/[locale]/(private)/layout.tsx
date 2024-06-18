import ProtectPage from './_components/ProtectPage';
import AppLayout from '@repo/ui/AppLayout';
import menuItems from '@/constant/menuItems';
import Header from './_components/Header';

export default function LayoutPrivate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectPage>
      <AppLayout menuItems={menuItems} header={<Header />}>
        {children}
      </AppLayout>
    </ProtectPage>
  );
}
