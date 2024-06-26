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
  const table = useMantineReactTable({
    columns,
    data,
    enableColumnActions: false,
    enableColumnFilters: false,
    initialState: {
      showGlobalFilter: true, //show the global filter by default
    },
  });
  return <MantineReactTable table={table} />;
}
