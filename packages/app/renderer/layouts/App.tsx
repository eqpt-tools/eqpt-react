import React, { ReactNode } from 'react';
import Navbar from '../components/navigation/Navbar';
import Header from '../components/header';
import PageTitle from '../components/shared/PageTitle';

interface LayoutProps {
  title: string;
  children: ReactNode;
}

interface ScrollProps {
  children: ReactNode;
}

function AppLayout({ title, children }: LayoutProps) {
  return (
    <div className="flex flex-grow min-h-screen select-none drag">
      <Navbar />
      <div className="ml-52 flex flex-col w-full text-white pt-5 pb-10 nodrag">
        <Header />
        <div className="ml-10 -mt-5">
          <PageTitle title={title} />
        </div>
        <div className="px-10">{children}</div>
      </div>
    </div>
  );
}

function Scroll({ children }: ScrollProps) {
  return (
    <div style={{ height: 'calc(100vh - 192px)' }} className="overflow-scroll">
      {children}
    </div>
  );
}

Scroll.displayName = 'ScrollContainer';
AppLayout.Scroll = Scroll;

export default AppLayout;
