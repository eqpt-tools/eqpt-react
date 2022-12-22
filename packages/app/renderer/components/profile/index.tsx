import React, { useCallback } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { ipcRenderer } from 'electron';
import Notifications from './Notifications';
import Icon from '../shared/Icon';
import User from './User';

export default function Profile() {
  const handleClick = useCallback(() => {
    ipcRenderer.send('close-app');
  }, []);

  return (
    <div className="w-full flex items-center space-x-8 justify-end">
      <div className="flex space-x-3">
        <User />
        <Notifications />
      </div>

      <div
        role="button"
        onClick={handleClick}
        className="text-gray-600 hover:text-gray-700 transition hover:cursor-pointer self-start pr-5"
      >
        <Icon icon={faXmark} size="xl" />
      </div>
    </div>
  );
}
