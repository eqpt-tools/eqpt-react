import React from 'react';
import useCreateVaultStore from '../../../stores/useCreateVaultStore';
import Modal from '../../shared/Modal';
import ChooseType from './steps/ChooseType';
import InputData from './steps/InputData';

export default function New() {
  const { step, open, setOpen } = useCreateVaultStore();

  return (
    <Modal open={open} onClose={setOpen}>
      {step === 0 && <ChooseType />}
      {step === 1 && <InputData />}
    </Modal>
  );
}
