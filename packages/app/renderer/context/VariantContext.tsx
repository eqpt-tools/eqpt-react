import { createContext, useContext } from 'react';
import { Product } from '@local/graphql';

interface VariantContext {
  product: Product | null;
  setProduct: (product: Product) => void;
}

export const VariantContext = createContext<VariantContext | null>(null);

export default function useVariantContext() {
  const context = useContext(VariantContext);
  if (!context) throw Error('Variant context must be provided.');

  return context;
}
