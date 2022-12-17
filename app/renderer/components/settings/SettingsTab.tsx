import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import Text from '../shared/Text';

export interface Props {
  title: string;
  subtitle: string;
  icon: IconDefinition;
  route: string;
}

export default function SettingsTab({ title, subtitle, icon, route }: Props) {
  const router = useRouter();
  const active = useMemo(() => router.route === route, [router, route]);

  return (
    <Link
      className="w-full flex flex-col align-middle space-y-2 cursor-pointer group"
      href={route}
    >
      <div
        className={clsx(
          'w-12 h-12 rounded-md flex items-center justify-center transition',
          {
            'bg-gray-800 group-hover:bg-gray-700': !active,
            'bg-indigo-500': active,
          },
        )}
      >
        <FontAwesomeIcon icon={icon} size="lg" />
      </div>
      <div className="flex flex-col">
        <div
          className={clsx(
            'text-xl font-semibold transition group-hover:opacity-100',
            {
              'opacity-50': !active,
              'opacity-100': active,
            },
          )}
        >
          {title}
        </div>
        <div
          className={clsx('text-sm transition group-hover:opacity-100', {
            'opacity-50': !active,
            'opacity-100': active,
          })}
        >
          {subtitle}
        </div>
      </div>
    </Link>
  );
}
