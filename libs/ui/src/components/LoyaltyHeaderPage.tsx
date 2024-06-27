'use client';
import { ActionIcon, Title } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

export default function LoyaltyHeaderPage({
  title,
  actions,
  returnPage,
}: {
  title: string;
  actions?: React.ReactNode;
  returnPage?: boolean;
}) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between pb-5">
      <div className="flex items-center gap-3">
        {returnPage && (
          <ActionIcon variant="default" onClick={() => router.back()}>
            <IconArrowLeft size={16} />
          </ActionIcon>
        )}
        <Title order={2}>{title}</Title>
      </div>
      <div className="flex gap-2 items-center">{actions}</div>
    </div>
  );
}
