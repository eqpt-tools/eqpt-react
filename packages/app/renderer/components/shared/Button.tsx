import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faSpinnerThird } from '@fortawesome/pro-solid-svg-icons';
import clsx from 'clsx';
import React, { MouseEvent, ReactNode } from 'react';
import Icon from './Icon';

type Color =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'warning-transparent'
  | 'transparent';

interface Props {
  color: Color;
  size: 'xs' | 'sm' | 'md' | 'lg';
  children?: ReactNode;
  icon?: IconDefinition;
  onClick?: (e: MouseEvent) => void;
  disabled?: boolean;
  type: 'button' | 'submit';
  className?: string;
  loading?: boolean;
}

export default function Button({
  color,
  children,
  size = 'md',
  disabled = false,
  type = 'button',
  onClick,
  icon,
  className,
  loading,
  ...props
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={clsx(
        'inline-flex justify-center items-center px-4 py-2 text-sm font-medium shadow-sm focus:outline-none transition',
        'hover:cursor-pointer text-white',
        className,
        {
          'bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700':
            color === 'primary',
          'bg-[#27272A] hover:bg-[#222224] active:bg-[#1d1d1e]':
            color === 'secondary',
          'bg-red-500 hover:bg-red-600 active:bg-red-700': color === 'warning',
          'bg-red-500/20 hover:bg-red-600/20 active:bg-red-700/20 !text-red-500':
            color === 'warning-transparent',
        },
        {
          'text-sm font-normal py-[0.375rem] px-3': size === 'xs',
          'text-sm font-medium py-1.5 px-3': size === 'sm',
          'text-sm font-medium py-1.5 px-4': size === 'md',
          'text-md font-medium py-3 px-6': size === 'lg',
        },
        {
          'rounded-md': !className?.includes('rounded'),
        },
        {
          '!cursor-not-allowed': disabled,
        },
        {
          '!px-2': !children && !!icon,
        },
      )}
      {...props}
    >
      {!loading && icon && (
        <Icon className={!children ? '' : 'mr-2'} icon={icon} />
      )}
      {loading && (
        <Icon
          className={clsx('fa-spin', { 'mr-2': !!children })}
          icon={faSpinnerThird}
        />
      )}
      {children}
    </button>
  );
}
