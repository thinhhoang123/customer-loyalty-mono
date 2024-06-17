import { theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import Icon from '../assets/brandText.svg';

export default function AppHeader() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header
      style={{
        background: colorBgContainer,
        display: 'flex',
        padding: '0 16px',
      }}
    >
      <img src={Icon.src} width={180} />
    </Header>
  );
}
