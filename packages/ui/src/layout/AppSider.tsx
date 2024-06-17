import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';
import IMenuItems from '../models/IMenuItems';

export default function AppSider({ menuItems }: { menuItems: IMenuItems[] }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      theme="light"
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="light"
        defaultSelectedKeys={['1']}
        mode="inline"
        items={menuItems}
      />
    </Sider>
  );
}
