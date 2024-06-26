import { AppShell, Box, NavLink } from '@mantine/core';
import {
  IconGauge,
  IconFingerprint,
  IconActivity,
  IconChevronRight,
} from '@tabler/icons-react';
import { useState } from 'react';
import INavItems from '../models/INavItems';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const data: INavItems[] = [
  { icon: IconGauge, label: 'Dashboard', href: '#' },
  {
    icon: IconFingerprint,
    label: 'Security',
    children: [
      { label: 'Users', href: '#' },
      { label: 'Roles', href: '#' },
      { label: 'Permissions', href: '#' },
    ],
  },
  { icon: IconActivity, label: 'Activity', href: '#' },
];

export default function AppNavBar({
  navItems,
  defaultNavItem,
}: {
  navItems?: INavItems[];
  defaultNavItem?: string;
}) {
  const [active, setActive] = useState(defaultNavItem ?? '');
  const t = useTranslations('NAV_BAR');

  const renderNav = (data: INavItems[]) => {
    return data.map((item, index) => (
      <NavLink
        component={Link}
        href={item.href ?? '#'}
        key={item.label}
        active={item.label === active}
        label={t(item.label)}
        rightSection={
          item.children ? <IconChevronRight size="1rem" stroke={1.5} /> : null
        }
        leftSection={item?.icon ? <item.icon size="1rem" stroke={1.5} /> : null}
        onClick={() => setActive(item.label)}
        childrenOffset={15}
        className="rounded-full"
      >
        {item?.children ? renderNav(item.children) : null}
      </NavLink>
    ));
  };

  return (
    <AppShell.Navbar p="sm" withBorder={false}>
      <Box>{renderNav(navItems ?? data)}</Box>
    </AppShell.Navbar>
  );
}
