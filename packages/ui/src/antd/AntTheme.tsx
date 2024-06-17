import { AntdRegistry } from '@ant-design/nextjs-registry';

export default function AntTheme({ children }: { children: React.ReactNode }) {
  return <AntdRegistry>{children}</AntdRegistry>;
}
