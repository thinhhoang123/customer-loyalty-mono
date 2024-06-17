import IMenuItems from '@repo/ui/IMenuItems';
import { SquareKanban } from 'lucide-react';

const menuItems: IMenuItems[] = [
  {
    label: 'Dashboard',
    key: 'dashboard',
    icon: <SquareKanban size={16} absoluteStrokeWidth />,
  },
  { label: 'Customers', key: 'customers' },
];

export default menuItems;
