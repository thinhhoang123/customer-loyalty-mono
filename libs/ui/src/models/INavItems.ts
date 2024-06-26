import { Icon, IconProps } from '@tabler/icons-react';

export default interface INavItems {
  icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  label: string;
  href?: string;
  children?: INavItems[];
}
