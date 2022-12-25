import React from 'react';
import Menu from '../components/proxies/Menu';
import AppLayout from '../layouts/App';

export default function Proxies() {
  return (
    <AppLayout title="Proxies">
      <AppLayout.Scroll>
        Proxies will go here
        <Menu />
      </AppLayout.Scroll>
    </AppLayout>
  );
}
