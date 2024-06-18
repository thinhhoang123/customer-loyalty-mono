import ProtectPage from './_components/ProtectPage';
import AppLayout from '@repo/ui/AppLayout';
import menuItems from '@/constant/menuItems';
import Header from './_components/Header';
// import { auth } from '@clerk/nextjs/server';

export default function LayoutPrivate({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { orgId } = auth().protect();
  return (
    <AppLayout menuItems={menuItems} header={<Header />}>
      {children}
    </AppLayout>
  );
}
