import React, { ReactNode } from 'react';
import Navbar from '../components/navigation/Navbar';
import Profile from '../components/profile';

interface Props {
  children: ReactNode;
}

function AppLayout({ children }: Props) {
  return (
    <div className="flex flex-grow min-h-screen select-none drag">
      <Navbar />
      <div className="ml-52 flex flex-col w-full text-white pt-5 pb-10 nodrag">
        <Profile />
        <div className="px-10">{children}</div>
      </div>
    </div>
  );
}

function Scroll({ children }: Props) {
  return (
    <div style={{ height: 'calc(100vh - 192px)' }} className="overflow-scroll">
      {children}
    </div>
  );
}

Scroll.displayName = 'ScrollContainer';
AppLayout.Scroll = Scroll;

export default AppLayout;
