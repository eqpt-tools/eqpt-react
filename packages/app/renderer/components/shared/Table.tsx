import React, { useEffect, useState } from 'react';
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  ColumnDef,
  HeaderContext,
  CellContext,
} from '@tanstack/react-table';
import clsx from 'clsx';
import Text from './Text';
import Checkbox from './Checkbox';
import useBulkSelectContext from '../../context/BulkSelectContext';

interface Props<T extends object> {
  columns: ColumnDef<T, any>[];
  data: T[];
  selectable?: boolean;
}

function HeaderCheckbox<T extends object>({
  table,
}: HeaderContext<T, unknown>) {
  return (
    <Checkbox
      checked={table.getIsAllRowsSelected()}
      setChecked={table.getToggleAllRowsSelectedHandler()}
    />
  );
}

function RowCheckbox<T extends object>({ row }: CellContext<T, unknown>) {
  return (
    <Checkbox
      checked={row.getIsSelected()}
      setChecked={row.getToggleSelectedHandler()}
    />
  );
}

export default function Table<T extends object>({
  columns,
  data,
  selectable,
}: Props<T>) {
  const bulkSelectContext = useBulkSelectContext();
  const [rowSelection, setRowSelection] = useState({});

  // When the row selection changes, pass these changes to our context, if provided
  useEffect(() => {
    if (!bulkSelectContext) return;

    bulkSelectContext.setSelectedRows(rowSelection);
  }, [bulkSelectContext, rowSelection]);

  // If the table is selectable, add select boxes to the header and rows
  if (selectable)
    columns.unshift({
      id: 'select',
      header: HeaderCheckbox,
      cell: RowCheckbox,
    });

  const table = useReactTable<T>({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: selectable,
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
  });

  return (
    <table className="table-auto border-separate w-full border-spacing-y-2">
      <thead className="bg-[#1A1B24] z-10 sticky top-0">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header, index) => {
              const isFirst = index === 0;
              const isLast = index === headerGroup.headers.length - 1;

              return (
                <th
                  key={header.id}
                  className={clsx(
                    'text-left py-4 px-6 border border-transparent',
                    {
                      'rounded-l': isFirst,
                      'rounded-r': isLast,
                    },
                  )}
                >
                  <Text weight="medium" opacity={100}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </Text>
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => {
          const isSelected = row.getIsSelected();

          return (
            <tr
              key={row.id}
              className={clsx('transition-all duration-200', {
                'bg-[#181921]': !isSelected,
                'bg-[#24252E]': isSelected,
              })}
            >
              {row.getVisibleCells().map((cell, index) => {
                const isFirst = index === 0;
                const isLast = index === row.getAllCells().length - 1;

                return (
                  <td
                    className={clsx('py-2 px-6 border border-transparent', {
                      'rounded-l': isFirst,
                      'rounded-r': isLast,
                      'text-opacity-80 text-white font-medium': !isLast,
                    })}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
