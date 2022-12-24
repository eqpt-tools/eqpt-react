import React, { useMemo } from 'react';
import Image from 'next/image';
import { faCog } from '@fortawesome/pro-solid-svg-icons/faCog';
import { faCalendar } from '@fortawesome/pro-solid-svg-icons/faCalendar';
import { faChartLineUp } from '@fortawesome/pro-solid-svg-icons/faChartLineUp';
import { faBagShopping } from '@fortawesome/pro-solid-svg-icons/faBagShopping';
import { faLock } from '@fortawesome/pro-solid-svg-icons/faLock';
import { useRouter } from 'next/router';
import { faCreditCardAlt } from '@fortawesome/pro-solid-svg-icons/faCreditCardAlt';
import { faServer } from '@fortawesome/pro-solid-svg-icons/faServer';
import { faBrowser } from '@fortawesome/pro-solid-svg-icons/faBrowser';
import NavItem, { NavigationItemProps } from './NavItem';

const LOGO_SIZE = 60;

export default function Navbar() {
  const router = useRouter();

  const ITEMS: NavigationItemProps[] = useMemo(
    () => [
      {
        icon: faCreditCardAlt,
        title: 'Billing',
        active: router.route.includes('/billing'),
        childItems: [
          {
            route: '/billing/cards',
            title: 'Cards',
          },
          {
            route: '/billing/convert',
            title: 'Convert',
          },
        ],
      },
      {
        icon: faBrowser,
        route: '/browsers',
        title: 'Browsers',
      },
      {
        icon: faCalendar,
        route: '/calendar',
        title: 'Calendar',
      },
      {
        icon: faChartLineUp,
        route: '/market',
        title: 'Market',
      },
      {
        icon: faBagShopping,
        route: '/orders',
        title: 'Orders',
      },
      {
        icon: faServer,
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
    ],
    [router],
  );

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
      <div className="pt-14 px-8">
        {ITEMS.map((item) => (
          <NavItem
            key={item.title}
            icon={item.icon}
            route={item.route}
            title={item.title}
            active={item.active}
            childItems={item.childItems}
          />
        ))}
      </div>
    </div>
  );
}
