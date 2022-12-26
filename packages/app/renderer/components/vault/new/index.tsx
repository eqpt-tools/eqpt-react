import React, { useCallback, useMemo, useState } from 'react';
import Modal from '../../shared/Modal';
import { NewEntryContext, Step } from './NewEntryContext';
import ChooseType from './steps/ChooseType';

interface Props {
  open: boolean;
  onClose: (open: boolean) => void;
}

export default function New({ open, onClose }: Props) {
  const [step, setStep] = useState<Step>(0);
  const [type, setType] = useState('Software');

  const handleClose = useCallback(() => {
    onClose(false);
  }, [onClose]);

  const value = useMemo(
    () => ({
      step,
      setStep,
      type,
      setType,
      handleClose,
    }),
    [handleClose, step, type],
  );

  return (
    <NewEntryContext.Provider value={value}>
      <Modal open={open} onClose={onClose}>
        {step === 0 && <ChooseType />}
      </Modal>
    </NewEntryContext.Provider>
  );
}
