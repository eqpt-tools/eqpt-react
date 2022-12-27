import { useMemo, useState } from 'react';

export default function useSelect() {
  const [selectedRows, setSelectedRows] = useState({});

  const selectValues = useMemo(
    () => ({
      selectedRows,
      setSelectedRows,
    }),
    [selectedRows],
  );

  return selectValues;
}
