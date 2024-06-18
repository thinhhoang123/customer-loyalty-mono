import { theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import Icon from '../assets/brandText.svg';

export default function AppHeader({ header }: { header?: React.ReactNode }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header
      style={{
        background: colorBgContainer,
        padding: '0 16px',
      }}
    >
      {header ? header : <img src={Icon.src} width={180} />}
    </Header>
  );
}
