import React, { ReactNode } from 'react';
import clsx from 'clsx';

type Size =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

type Weight =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';

type Opacity = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;

type Tracking = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';

type LineClamp = 1 | 2 | 3 | 4 | 5 | 6;

interface Props {
  children: ReactNode;
  size?: Size;
  weight?: Weight;
  opacity?: Opacity;
  tracking?: Tracking;
  truncate?: boolean;
  uppercase?: boolean;
  lineClamp?: LineClamp;
  className?: string;
}

export default function Text({
  children,
  size = 'md',
  weight = 'normal',
  opacity = 90,
  tracking = 'normal',
  truncate,
  uppercase,
  lineClamp,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        'text-white',
        className,
        {
          'text-xs': size === 'xs',
          'text-sm': size === 'sm',
          'text-base': size === 'md',
          'text-lg': size === 'lg',
          'text-xl': size === 'xl',
          'text-2xl': size === '2xl',
          'text-3xl': size === '3xl',
          'text-4xl': size === '4xl',
          'text-5xl': size === '5xl',
          'text-6xl': size === '6xl',
          'text-7xl': size === '7xl',
          'text-8xl': size === '8xl',
          'text-9xl': size === '9xl',
        },
        {
          'font-thin': weight === 'thin',
          'font-extralight': weight === 'extralight',
          'font-light': weight === 'light',
          'font-normal': weight === 'normal',
          'font-medium': weight === 'medium',
          'font-semibold': weight === 'semibold',
          'font-bold': weight === 'bold',
          'font-extrabold': weight === 'extrabold',
          'font-black': weight === 'black',
        },
        {
          'opacity-10': opacity === 10,
          'opacity-20': opacity === 20,
          'opacity-30': opacity === 30,
          'opacity-40': opacity === 40,
          'opacity-50': opacity === 50,
          'opacity-60': opacity === 60,
          'opacity-70': opacity === 70,
          'opacity-80': opacity === 80,
          'opacity-90': opacity === 90,
          'opacity-100': opacity === 100,
        },
        {
          'tracking-tighter': tracking === 'tighter',
          'tracking-tight': tracking === 'tight',
          'tracking-normal': tracking === 'normal',
          'tracking-wide': tracking === 'wide',
          'tracking-wider': tracking === 'wider',
          'tracking-widest': tracking === 'widest',
        },
        {
          'line-clamp-1': lineClamp === 1,
        },
        {
          truncate,
          uppercase,
        },
      )}
    >
      {children}
    </div>
  );
}
