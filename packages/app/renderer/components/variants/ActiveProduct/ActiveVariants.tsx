import { ProductVariant } from '@local/data/schemas/products';
import React from 'react';
import { CellContext, createColumnHelper } from '@tanstack/react-table';
import useVariantContext from '../../../context/VariantContext';
import Table from '../../shared/Table';
import Text from '../../shared/Text';

function Stock({ getValue }: CellContext<ProductVariant, number>) {
  return (
    <Text
      className={!getValue() ? '!text-red-400' : 'text-white'}
      weight="medium"
      opacity={80}
    >
      {getValue() || 'N/A'}
    </Text>
  );
}

export default function ActiveVariants() {
  const { product } = useVariantContext();
  const columnHelper = createColumnHelper<ProductVariant>();

  const columns = [
    columnHelper.accessor('title', {
      cell: (info) => info.getValue(),
      header: 'Size',
    }),
    columnHelper.accessor('id', {
      cell: (info) => info.getValue(),
      header: 'Variant',
    }),
    columnHelper.accessor('stock', {
      cell: Stock,
      header: 'Stock',
    }),
  ];

  if (!product) return null;

  return (
    <div className="h-[calc(100vh-410px)] overflow-auto">
      <Table<ProductVariant>
        data={product.variants}
        columns={columns}
        selectable
      />
    </div>
  );
}
