import React, { useState, useCallback } from 'react';
import { faServer } from '@fortawesome/pro-solid-svg-icons/faServer';
import { faUserFriends } from '@fortawesome/pro-solid-svg-icons/faUserFriends';
import { faComputer } from '@fortawesome/pro-solid-svg-icons/faComputer';
import Modal from '../../../shared/Modal';
import Button from '../../../shared/Button';
import RadioGroup from '../../../shared/RadioGroup';
import useCreateVaultStore from '../../../../stores/useCreateVaultStore';

const types = [
  {
    name: 'Software',
    description: 'Store your license keys or user:password logins.',
    icon: faComputer,
  },
  {
    name: 'Accounts',
    description: 'Store your bulk webstore accounts.',
    icon: faUserFriends,
  },
  {
    name: 'Proxies',
    description: 'Store your user:pass or IP authenticated proxies.',
    icon: faServer,
  },
];

export default function ChooseType() {
  const [value, setValue] = useState('Software');
  const { setStep, setType, setOpen } = useCreateVaultStore();

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleSubmit = useCallback(() => {
    setType(value);
    setStep(1);
  }, [setStep, setType, value]);

  return (
    <>
      <Modal.Header
        title="Choose a type"
        subtitle="What would you like to store in your vault?"
      />
      <Modal.Body>
        <RadioGroup
          name="entryType"
          options={types}
          value={value}
          onChange={setValue}
        />
      </Modal.Body>
      <Modal.Footer>
        <div className="flex justify-between">
          <Button
            type="button"
            size="sm"
            color="warning-transparent"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            type="button"
            size="sm"
            color="primary"
            onClick={handleSubmit}
          >
            Next
          </Button>
        </div>
      </Modal.Footer>
    </>
  );
}
