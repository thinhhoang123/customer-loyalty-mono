'use client';
import { Box, Card } from '@mantine/core';

export default function LoyaltyCard({
  children,
  cardSection,
}: {
  children: React.ReactNode;
  cardSection?: React.ReactNode;
}) {
  return (
    <Card shadow="xs" padding="lg" radius="md" withBorder>
      {cardSection ?? <Card.Section>{cardSection}</Card.Section>}
      <Box mt="md" mb="xs">
        {children}
      </Box>
    </Card>
  );
}
