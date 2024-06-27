'use client';
import { Box, Card } from '@mantine/core';

export default function LoyaltyCard({
  children,
  cardSection,
  className,
}: {
  children: React.ReactNode;
  cardSection?: React.ReactNode;
  className?: string;
}) {
  return (
    <Card shadow="xs" padding="lg" radius="md" withBorder>
      {cardSection ?? <Card.Section>{cardSection}</Card.Section>}
      <Box mt="md" mb="xs" className={className}>
        {children}
      </Box>
    </Card>
  );
}
