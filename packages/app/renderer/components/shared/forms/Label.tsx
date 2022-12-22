import React, { ReactNode } from 'react';

interface Props {
  name: string;
  children: ReactNode;
}

export default function Label({ name, children }: Props) {
  return (
    <label className="block text-white/70 text-sm mb-1" htmlFor={name}>
      {children}
    </label>
  );
}
