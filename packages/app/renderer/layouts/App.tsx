import React, { ReactNode } from 'react';
import Navbar from '../components/navigation/Navbar';

interface Props {
  children: ReactNode;
}

function AppLayout({ children }: Props) {
  return (
    <div className="flex flex-grow min-h-screen select-none drag">
      <Navbar />
      <div className="ml-52 flex w-full text-white p-10">{children}</div>
    </div>
  );
}

function Scroll({ children }: Props) {
  return (
    <div style={{ height: 'calc(100vh - 120px)' }} className="overflow-scroll">
      {children}
    </div>
  );
}

Scroll.displayName = 'ScrollContainer';
AppLayout.Scroll = Scroll;

export default AppLayout;
