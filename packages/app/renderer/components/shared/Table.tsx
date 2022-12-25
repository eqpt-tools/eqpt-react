import React from 'react';
import { useTable, Column } from 'react-table';
import clsx from 'clsx';
import Text from './Text';

interface Props<T extends object> {
  columns: Column<T>[];
  data: T[];
}

export default function Table<T extends object>({ columns, data }: Props<T>) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<T>({
      columns,
      data,
    });

  return (
    <table
      className="table-fixed border-separate w-full border-spacing-y-2"
      {...getTableProps()}
    >
      <thead className="bg-[#1A1B24] z-10 sticky top-0">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, index) => {
              const isFirst = index === 0;
              const isLast = index === headerGroup.headers.length - 1;

              return (
                <th
                  className={clsx(
                    'text-left py-4 px-6 border border-transparent',
                    {
                      'rounded-l': isFirst,
                      'rounded-r': isLast,
                    },
                  )}
                  {...column.getHeaderProps()}
                >
                  <Text weight="medium" opacity={100}>
                    {column.render('Header')}
                  </Text>
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr className="bg-[#181921]" {...row.getRowProps()}>
              {row.cells.map((cell, index) => {
                const isFirst = index === 0;
                const isLast = index === row.cells.length - 1;

                return (
                  <td
                    className={clsx('py-2 px-6 border border-transparent', {
                      'rounded-l': isFirst,
                      'rounded-r': isLast,
                      'text-opacity-80 text-white font-medium': !isLast,
                    })}
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
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
