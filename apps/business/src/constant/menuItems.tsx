import IMenuItems from '@repo/ui/IMenuItems';
import { Award, HandCoins, SquareKanban, UsersRound } from 'lucide-react';

const sizeItem = 20;

const menuItems: IMenuItems[] = [
  {
    label: 'Dashboard',
    key: 'dashboard',
    icon: <SquareKanban size={sizeItem} />,
  },
  {
    label: 'Customers',
    key: 'customers',
    icon: <UsersRound size={sizeItem} />,
  },
  {
    label: 'Tiers',
    key: 'tiers',
    icon: <Award size={sizeItem} />,
  },
  {
    label: 'Rewards',
    key: 'rewards',
    icon: <HandCoins size={sizeItem} />,
  },
];

export default menuItems;
