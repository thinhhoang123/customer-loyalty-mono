'use client';
import { Breadcrumb, Layout, theme } from 'antd';
import AppSider from './AppSider';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import IMenuItems from '../models/IMenuItems';

const { Header, Content, Footer } = Layout;

export default function AppLayout({
  children,
  menuItems = defaultMenuItems,
}: {
  children: React.ReactNode;
  menuItems?: IMenuItems[];
}) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppSider menuItems={menuItems} />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Customer Loyalty ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
}

const defaultMenuItems: IMenuItems[] = [
  {
    label: 'Option 1',
    key: '1',
    icon: <PieChartOutlined />,
  },
  {
    label: 'Option 2',
    key: '2',
    icon: <DesktopOutlined />,
  },
  {
    label: 'User',
    key: 'sub1',
    icon: <UserOutlined />,
    children: [
      {
        label: 'Tom',
        key: '3',
      },
      {
        label: 'Bill',
        key: '4',
      },
      {
        label: 'Alex',
        key: '5',
      },
    ],
  },
  {
    label: 'Team',
    key: 'sub2',
    icon: <TeamOutlined />,
    children: [
      {
        label: 'Team 1',
        key: '6',
      },
      {
        label: 'Team 2',
        key: '8',
      },
    ],
  },
  {
    label: 'Files',
    key: '9',
    icon: <FileOutlined />,
  },
];
