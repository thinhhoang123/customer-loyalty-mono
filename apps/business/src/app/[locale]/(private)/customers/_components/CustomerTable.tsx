'use client';
import { LoyaltyTable } from '@customer-loyalty-nx/ui';
import { ActionIcon } from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import IconSize from 'apps/business/src/constants/IconSize';
import EGender from 'apps/business/src/enum/EGender';
import ICustomers from 'apps/business/src/models/ICustomers';
import { MRT_ColumnDef } from 'mantine-react-table';
import moment from 'moment';
import { useTranslations } from 'next-intl';

export default function CustomerTable({
  customerList,
}: {
  customerList: ICustomers[];
}) {
  const t = useTranslations('GENDER');
  const columns: MRT_ColumnDef<ICustomers>[] = [
    {
      accessorKey: 'id', //access nested data with dot notation
      header: 'ID',
    },
    {
      accessorKey: 'name', //access nested data with dot notation
      header: 'Name',
    },
    {
      accessorKey: 'gender',
      header: 'Gender',
      Cell: ({ renderedCellValue }) => (
        <span>{t(EGender[renderedCellValue as number])}</span>
      ),
    },
    {
      accessorKey: 'tier',
      header: 'Tier',
    },
    {
      accessorKey: 'points',
      header: 'Points',
      Cell: ({ cell }) => (
        <span>
          {cell.getValue<{ current: number }>()?.current} /{' '}
          {cell.getValue<{ max: number }>()?.max}
        </span>
      ),
    },
    {
      accessorKey: 'phone',
      header: 'Phone',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'birthdate',
      header: 'Day of birth',
      Cell: ({ cell }) => {
        const dob = moment(cell.getValue<Date>()).format('DD/MM/YYYY');
        return <span>{dob}</span>;
      },
    },
    {
      accessorKey: 'actions',
      header: 'Actions',
      Cell: () => {
        return (
          <div className="flex gap-2">
            <ActionIcon aria-label="edit" variant="light">
              <IconPencil size={IconSize} />
            </ActionIcon>
            <ActionIcon aria-label="delete" color="red">
              <IconTrash size={IconSize} />
            </ActionIcon>
          </div>
        );
      },
    },
  ];

  return <LoyaltyTable columns={columns} data={customerList} />;
}
