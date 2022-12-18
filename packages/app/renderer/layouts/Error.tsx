import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function ErrorLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen align-middle select-none drag">
      <div className="flex flex-col justify-center items-center w-full max-w-md mx-auto">
        {children}
      </div>
    </div>
  );
}
