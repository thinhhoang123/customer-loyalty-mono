import { AppLayout } from '@customer-loyalty-nx/ui';
import NavItems from '../../constants/navItems';
import { useTranslations } from 'next-intl';

export default function Index() {
  const t = useTranslations('Index');
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return <AppLayout navItems={NavItems}>Main{t('title')}</AppLayout>;
}
