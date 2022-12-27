import { createContext, useContext } from 'react';

interface Selection {
  [key: number]: boolean;
}

interface BulkSelectContext {
  selectedRows: Selection;
  setSelectedRows: (selection: Selection) => void;
}

export const BulkSelectContext = createContext<BulkSelectContext | null>(null);

export default function useBulkSelectContext() {
  const context = useContext(BulkSelectContext);

  return context;
}
