import { Menu, Transition } from '@headlessui/react';
import React, { Fragment, ReactNode } from 'react';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import clsx from 'clsx';
import Icon from './Icon';
import Button from './Button';

type ItemColor = 'default' | 'warning';

interface Props {
  children: ReactNode;
}

interface ItemProps {
  text: string;
  icon?: IconDefinition;
  color?: ItemColor;
}

function QuickActions({ children }: Props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          as={Button}
          type="button"
          color="secondary"
          size="lg"
          icon={faEllipsis}
          className="!p-3 h-[44px]"
        />
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md shadow-lg focus:outline-none bg-[#20222C] border-[#262833] border-2">
          <div className="p-1.5">{children}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function Item({ text, icon, color = 'default' }: ItemProps) {
  return (
    <Menu.Item>
      <button
        className={clsx(
          'group flex w-full items-center rounded px-4 py-2 text-base font-medium text-gray-300',
          {
            'hover:bg-[#B7B8BA]/5': color === 'default',
            'hover:bg-[#F25252]/[.12] hover:text-red-500': color === 'warning',
          },
        )}
      >
        {icon && <Icon icon={icon} className="pr-3" />}
        {text}
      </button>
    </Menu.Item>
  );
}

function Divider() {
  return <div className="divide-y border-gray-800 space-y-3" />;
}

QuickActions.displayName = 'QuickActions';
Item.displayName = 'QuickActionsItem';
Divider.displayName = 'QuickActionsDivider';

QuickActions.Item = Item;
QuickActions.Divider = Divider;

export default QuickActions;
