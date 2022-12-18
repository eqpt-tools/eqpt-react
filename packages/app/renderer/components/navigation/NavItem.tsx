import Link from 'next/link';
import React, { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Icon from '../shared/Icon';

interface ChildItemProps {
  route?: string;
  title: string;
}

export interface NavigationItemProps {
  icon: IconDefinition;
  route?: string;
  title: string;
  active?: boolean;
  childItems?: ChildItemProps[];
}

function ChildItem({ title, route }: ChildItemProps) {
  const router = useRouter();
  const active = useMemo(() => router.route === route, [router, route]);

  return (
    <Link
      href={route}
      className={clsx('font-normal pl-9 mt-1', {
        'text-white': active,
        'text-[#BBBBBB] hover:text-gray-200': !active,
      })}
    >
      {title}
    </Link>
  );
}

export default function NavItem({
  title,
  route,
  icon,
  active: routeActive,
  childItems,
}: NavigationItemProps) {
  const router = useRouter();

  const active = useMemo(
    () => routeActive || router.route === route,
    [routeActive, router, route],
  );

  const handleClick = useCallback(() => {
    // If the route has child items, go to the first route
    if (childItems) router.push(childItems[0].route);
  }, [childItems, router]);

  const Tag = childItems ? 'div' : Link;

  return (
    <div className="mb-4">
      <Tag
        onClick={handleClick}
        className={clsx(
          'flex space-x-3 align-middle transition hover:cursor-pointer group',
          {
            'mb-1': !!childItems,
          },
        )}
        {...(!childItems && { href: route })}
      >
        <div className="h-6 w-6">
          <Icon
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
      </Tag>
      <div className="flex flex-col">
        {active &&
          childItems &&
          childItems.map((child) => (
            <ChildItem title={child.title} route={child.route} />
          ))}
      </div>
    </div>
  );
}
