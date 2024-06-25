'use client';
import { INavItems } from '@customer-loyalty-nx/ui';
import { IconGauge, IconUsers, IconAward } from '@tabler/icons-react';

const NavItems: INavItems[] = [
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconUsers, label: 'Customer' },
  { icon: IconAward, label: 'Tiers' },
];

export default NavItems;
