import { Title } from '@mantine/core';

export default function LoyaltyHeaderPage({
  title,
  actions,
}: {
  title: string;
  actions: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between pb-5">
      <Title order={2}>{title}</Title>
      <div className="flex gap-2 items-center">{actions}</div>
    </div>
  );
}
