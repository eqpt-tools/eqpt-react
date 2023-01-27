import React, { useCallback } from 'react';
import Button from '../components/shared/Button';
import AppLayout from '../layouts/App';
import New from '../components/vault/new';
import useCreateVaultStore from '../stores/useCreateVaultStore';

export default function Index() {
  const { setOpen } = useCreateVaultStore();

  const handleOpen = useCallback(() => setOpen(true), [setOpen]);

  return (
    <AppLayout title="Index">
      <AppLayout.Scroll>
        <Button type="button" size="lg" color="primary" onClick={handleOpen}>
          Open modal
        </Button>
        <div className="p-4" />
      </AppLayout.Scroll>

      <New />
    </AppLayout>
  );
}
