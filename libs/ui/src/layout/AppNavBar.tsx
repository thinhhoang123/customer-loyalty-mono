import { AppShell, Box, NavLink } from '@mantine/core';
import {
  IconGauge,
  IconFingerprint,
  IconActivity,
  IconChevronRight,
} from '@tabler/icons-react';
import { useState } from 'react';
import INavItems from '../models/INavItems';

const data: INavItems[] = [
  { icon: IconGauge, label: 'Dashboard' },
  {
    icon: IconFingerprint,
    label: 'Security',
    children: [
      { label: 'Users' },
      { label: 'Roles' },
      { label: 'Permissions' },
    ],
  },
  { icon: IconActivity, label: 'Activity' },
];

export default function AppNavBar({ navItems }: { navItems?: INavItems[] }) {
  const [active, setActive] = useState('');

  const renderNav = (data: INavItems[]) => {
    return data.map((item, index) => (
      <NavLink
        href="#required-for-focus"
        key={item.label}
        active={item.label === active}
        label={item.label}
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
    <AppShell.Navbar p="md">
      <Box>{renderNav(navItems ?? data)}</Box>
    </AppShell.Navbar>
  );
}
