import { BrandIcon } from '@customer-loyalty-nx/assets';
import { AppShell, Burger, Group } from '@mantine/core';

export default function AppHeader({
  desktopOpened,
  mobileOpened,
  toggleDesktop,
  toggleMobile,
}: {
  desktopOpened: boolean;
  mobileOpened: boolean;
  toggleDesktop: () => void;
  toggleMobile: () => void;
}) {
  return (
    <AppShell.Header>
      <Group h="100%" px="md">
        <Burger
          opened={mobileOpened}
          onClick={toggleMobile}
          hiddenFrom="sm"
          size="sm"
        />
        <Burger
          opened={desktopOpened}
          onClick={toggleDesktop}
          visibleFrom="sm"
          size="sm"
        />
        <img src={(BrandIcon as any).src} width={130} height={130} alt="logo" />
      </Group>
    </AppShell.Header>
  );
}
