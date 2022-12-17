import { toast, Toast } from 'react-hot-toast';
import React from 'react';
import clsx from 'clsx';

interface CustomToastProps extends Toast {
  color: 'success' | 'failure';
  message: string;
}

function CustomToast({ color, message, visible }: CustomToastProps) {
  return (
    <div
      className={clsx(
        'max-w-xs w-full border-2 border-opacity-90 bg-opacity-20 shadow-lg rounded-md px-4 py-1.5 flex select-none font-medium',
        {
          'bg-blue-500 border-blue-500 text-blue-500': color === 'success',
          'bg-red-500 border-red-500 text-red-500': color === 'failure',
        },
        {
          'animate-enter': visible,
          'animate-leave': !visible,
        },
      )}
    >
      {message}
    </div>
  );
}

export const alertSuccess = function alertSuccess(message: string) {
  return toast.custom((t) => CustomToast({ ...t, color: 'success', message }), {
    id: 'success',
  });
};

export const alertFailure = function alertFailure(message: string) {
  return toast.custom((t) => CustomToast({ ...t, color: 'failure', message }), {
    id: 'failure',
  });
};
