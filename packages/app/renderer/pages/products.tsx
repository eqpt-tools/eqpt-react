import React, { useMemo, useState } from 'react';
import { Product } from '@local/graphql';
import AppLayout from '../layouts/App';
import AddVariant from '../forms/variants/AddVariant';
import { VariantContext } from '../context/VariantContext';
import ActiveProduct from '../components/variants/ActiveProduct';
import SavedProducts from '../components/variants/SavedProducts';
import ActiveVariants from '../components/variants/ActiveProduct/ActiveVariants';
import { BulkSelectContext } from '../context/BulkSelectContext';
import useSelect from '../hooks/useSelect';

export default function Variants() {
  const selectValue = useSelect();
  const [product, setProduct] = useState<Product | null>(null);

  const variantContextValue = useMemo(
    () => ({
      product,
      setProduct,
    }),
    [product],
  );

  return (
    <AppLayout title="Products">
      <BulkSelectContext.Provider value={selectValue}>
        <VariantContext.Provider value={variantContextValue}>
          <div className="grid grid-cols-12 gap-x-6 w-full mt-5">
            <div className="col-start-1 col-end-8 space-y-6">
              <AddVariant />
              <ActiveProduct />
              <ActiveVariants />
            </div>

            <div className="col-start-8 col-end-13 flex space-x-3 h-full">
              <SavedProducts />
            </div>
          </div>
        </VariantContext.Provider>
      </BulkSelectContext.Provider>
    </AppLayout>
  );
}