import React from 'react';
import Image from 'next/image';
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';
import { faDesktop } from '@fortawesome/free-solid-svg-icons/faDesktop';
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';
import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons/faBagShopping';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons/faNetworkWired';
import { useRouter } from 'next/router';
import NavItem, { NavigationItemProps } from './NavItem';

const LOGO_SIZE = 60;

export default function Navbar() {
  const router = useRouter();

  const ITEMS: NavigationItemProps[] = [
    {
      icon: faCog,
      route: '/',
      title: 'Index',
    },
    {
      icon: faDesktop,
      route: '/browsers',
      title: 'Browsers',
    },
    {
      icon: faCalendar,
      route: '/calendar',
      title: 'Calendar',
    },
    {
      icon: faChartLine,
      route: '/market',
      title: 'Market',
    },
    {
      icon: faBagShopping,
      route: '/orders',
      title: 'Orders',
    },
    {
      icon: faNetworkWired,
      route: '/proxies',
      title: 'Proxies',
    },
    {
      icon: faLock,
      route: '/vault',
      title: 'Vault',
    },
    {
      icon: faCog,
      route: '/settings',
      title: 'Settings',
      active: router.route.includes('/settings'),
    },
  ];

  return (
    <div className="bg-[#191A23] fixed w-48 h-full py-10">
      <div className="flex justify-center">
        <Image
          src="/images/logo.png"
          width={LOGO_SIZE}
          height={LOGO_SIZE}
          alt="EQPT Logo"
        />
      </div>
      <div className="pt-14 px-8 space-y-4">
        {ITEMS.map((item) => (
          <NavItem
            key={item.route}
            icon={item.icon}
            route={item.route}
            title={item.title}
            active={item.active}
          />
        ))}
      </div>
    </div>
  );
}
