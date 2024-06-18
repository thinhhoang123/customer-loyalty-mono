import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, ThemeConfig } from 'antd';

export default function AntTheme({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme?: ThemeConfig;
}) {
  return (
    <AntdRegistry>
      <ConfigProvider theme={theme}>{children}</ConfigProvider>
    </AntdRegistry>
  );
}
