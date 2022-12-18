import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen align-middle select-none drag">
      {children}
    </div>
  );
}
