import { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export default interface IMenuItems {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  children?: MenuItem[];
  onClick?: () => void;
}
