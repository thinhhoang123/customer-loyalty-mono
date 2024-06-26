'use client';
import {
  MantineReactTable,
  MRT_ColumnDef,
  useMantineReactTable,
} from 'mantine-react-table';
import 'mantine-react-table/styles.css';

interface LoyaltyTableProps<T extends object> {
  columns: MRT_ColumnDef<T>[];
  data: T[];
}

export default function LoyaltyTable<T extends object>({
  columns,
  data,
}: LoyaltyTableProps<T>) {
  return (
    <MantineReactTable
      columns={columns}
      data={data}
      enableColumnPinning
      enableStickyHeader
      initialState={{
        columnPinning: { right: ['actions'] },
        showGlobalFilter: true,
      }}
      mantineTableContainerProps={{
        style: { maxHeight: 'calc(100vh - 300px)' },
      }}
    />
  );
}
