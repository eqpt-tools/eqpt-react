import React from 'react';
import SavedProduct from './SavedProduct';
import { trpc } from '../../../helpers/trpc';

export default function SavedProducts() {
  const { data: products } = trpc.products.list.useQuery();

  return (
    <div className="bg-[#1E1F29] h-[calc(100vh-140px)] rounded p-4 w-full overflow-auto space-y-4">
      {products?.map((product) => (
        <SavedProduct key={product.id} product={product} />
      ))}
    </div>
  );
}
