'use client';
import { AppShell, Burger, Container, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { BrandIcon } from '@customer-loyalty-nx/assets';
import AppNavBar from './AppNavBar';
import AppHeader from './AppHeader';
import { INavItems } from '../models';

export default function AppLayout({
  children,
  navItems,
}: {
  children: React.ReactNode;
  navItems?: INavItems[];
}) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppHeader
        mobileOpened={mobileOpened}
        desktopOpened={desktopOpened}
        toggleDesktop={toggleDesktop}
        toggleMobile={toggleMobile}
      />
      <AppNavBar navItems={navItems} />
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
