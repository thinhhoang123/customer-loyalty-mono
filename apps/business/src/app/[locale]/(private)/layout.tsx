import ProtectPage from './_components/ProtectPage';
import AppLayout from '@repo/ui/AppLayout';
import menuItems from '@/constant/menuItems';

export default function LayoutPrivate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectPage>
      <AppLayout menuItems={menuItems}>{children}</AppLayout>
    </ProtectPage>
  );
}
