import { LoyaltyHeaderPage, LoyaltyTable } from '@customer-loyalty-nx/ui';
import { Box, Button, Input } from '@mantine/core';
import { IconFileImport, IconPlus, IconSearch } from '@tabler/icons-react';
import { MRT_ColumnDef } from 'mantine-react-table';
import { useTranslations } from 'next-intl';
const data: Person[] = [
  {
    name: {
      firstName: 'Zachary',
      lastName: 'Davis',
    },
    address: '261 Battle Ford',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Robert',
      lastName: 'Smith',
    },
    address: '566 Brakus Inlet',
    city: 'Westerville',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Yan',
    },
    address: '7777 Kuhic Knoll',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'John',
      lastName: 'Upton',
    },
    address: '722 Emie Stream',
    city: 'Huntington',
    state: 'Washington',
  },
  {
    name: {
      firstName: 'Nathan',
      lastName: 'Harris',
    },
    address: '1 Kuhic Knoll',
    city: 'Ohiowa',
    state: 'Nebraska',
  },
];
type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  city: string;
  state: string;
};

export default function CustomersPage() {
  const t = useTranslations('CUSTOMERS');
  const columns: MRT_ColumnDef<Person>[] = [
    {
      accessorKey: 'name.firstName', //access nested data with dot notation
      header: 'First Name',
    },
    {
      accessorKey: 'name.lastName',
      header: 'Last Name',
    },
    {
      accessorKey: 'address', //normal accessorKey
      header: 'Address',
    },
    {
      accessorKey: 'city',
      header: 'City',
    },
    {
      accessorKey: 'state',
      header: 'State',
    },
  ];

  return (
    <section>
      <LoyaltyHeaderPage
        title={t('TITLE')}
        actions={
          <>
            <Button
              variant="default"
              leftSection={<IconFileImport size={14} />}
            >
              {t('IMPORT')}
            </Button>
            <Button leftSection={<IconPlus size={14} />}>{t('ADD')}</Button>
          </>
        }
      />

      <LoyaltyTable columns={columns} data={data} />
    </section>
  );
}
