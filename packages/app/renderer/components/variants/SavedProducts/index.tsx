import { useFetchProducts } from '@local/graphql';
import React, { useMemo } from 'react';
import SavedProduct from './SavedProduct';

export default function SavedProducts() {
  const { data: productData } = useFetchProducts();

  const products = useMemo(() => productData?.products || [], [productData]);

  return (
    <div className="bg-[#1E1F29] h-[calc(100vh-140px)] rounded p-4 w-full overflow-auto space-y-4">
      {products.map((product) => (
        <SavedProduct key={product.id} product={product} />
      ))}
    </div>
  );
}
