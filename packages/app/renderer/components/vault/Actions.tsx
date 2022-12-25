import copy from 'copy-to-clipboard';
import React, { useCallback } from 'react';
import { Cell } from 'react-table';
import QuickActions from '../shared/QuickActions';

export default function Actions({ row: { original: object } }: Cell) {
  const handleCopy = useCallback(() => {
    copy(object.id);
  }, [object.id]);

  return (
    <div className="flex justify-end">
      <QuickActions>
        <QuickActions.Item text="Copy" onClick={handleCopy} />
        <QuickActions.Item text="Copy" color="warning" onClick={handleCopy} />
        <QuickActions.Divider />
        <QuickActions.Item text="Copy" onClick={handleCopy} />
      </QuickActions>
    </div>
  );
}
