'use client';
import { INavItems } from '@customer-loyalty-nx/ui';
import { IconGauge, IconUsers, IconAward } from '@tabler/icons-react';

const NavItems: INavItems[] = [
  { icon: IconGauge, label: 'DASHBOARD', href: '/dashboard' },
  { icon: IconUsers, label: 'CUSTOMERS', href: '/customers' },
  { icon: IconAward, label: 'TIERS', href: '/tiers' },
];

export default NavItems;
