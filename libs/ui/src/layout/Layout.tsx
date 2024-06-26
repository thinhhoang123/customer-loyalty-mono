'use client';
import { AppShell, Burger, Container, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import AppNavBar from './AppNavBar';
import AppHeader from './AppHeader';
import { INavItems } from '../models';
import { usePathname } from 'next/navigation';

export default function AppLayout({
  children,
  navItems,
}: {
  children: React.ReactNode;
  navItems?: INavItems[];
}) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const pathname = usePathname();
  const defaultNavItem = navItems?.filter((item) => {
    // Remove the locale from the pathname
    const router = pathname.slice(3);
    return item?.href?.includes(router);
  });

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="lg"
      transitionDuration={500}
      transitionTimingFunction="ease"
    >
      <AppHeader
        mobileOpened={mobileOpened}
        desktopOpened={desktopOpened}
        toggleDesktop={toggleDesktop}
        toggleMobile={toggleMobile}
      />
      <AppNavBar
        navItems={navItems}
        defaultNavItem={defaultNavItem?.length ? defaultNavItem[0].label : ''}
      />
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
