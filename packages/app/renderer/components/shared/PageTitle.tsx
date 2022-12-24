import React from 'react';
import clsx from 'clsx';

interface Props {
  title: string;
  className?: string;
}

// TODO: Add item count, add children
export default function PageTitle({ title, className }: Props) {
  return (
    <div className={clsx('text-3xl font-semibold text-[#DADEE4]', className)}>
      {title}
    </div>
  );
}
