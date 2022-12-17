import Link from 'next/link';
import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface NavigationItemProps {
  icon: IconDefinition;
  route: string;
  title: string;
  active?: boolean;
  // TODO: Implement nested navigation items
  // children?: NavigationItemProps[];
}

export default function NavItem({
  title,
  route,
  icon,
  active: routeActive,
}: NavigationItemProps) {
  const router = useRouter();
  const active = useMemo(
    () => routeActive || router.route === route,
    [routeActive, router, route],
  );

  return (
    <Link
      className="flex space-x-3 align-middle transition hover:cursor-pointer group"
      href={route}
    >
      <div className="h-6 w-6 flex justify-center align-middle">
        <FontAwesomeIcon
          icon={icon}
          size="lg"
          className={clsx('mx-auto', {
            'text-indigo-400': active,
            'text-[#E5E5E5] group-hover:text-gray-200': !active,
          })}
        />
      </div>
      <div
        className={clsx('font-normal', {
          'text-indigo-400': active,
          'text-[#BBBBBB] group-hover:text-gray-200': !active,
        })}
      >
        {title}
      </div>
    </Link>
  );
}
