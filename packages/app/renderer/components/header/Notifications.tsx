import { Popover, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { faChevronDown } from '@fortawesome/pro-solid-svg-icons/faChevronDown';
import { faBell } from '@fortawesome/pro-solid-svg-icons/faBell';
import Image from 'next/image';
import { faFaceMeh } from '@fortawesome/pro-solid-svg-icons/faFaceMeh';
import Icon from '../shared/Icon';
import Text from '../shared/Text';
import Button from '../shared/Button';

const solutions = [
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '##',
    icon: faChevronDown,
  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '##',
    icon: faChevronDown,
  },
  {
    name: 'Reports',
    description: 'Keep track of your growth',
    href: '##',
    icon: faChevronDown,
  },
];

export default function Notifications() {
  return (
    <Popover>
      <Popover.Button className="bg-[#1E1F29] hover:bg-[#1b1b26] transition items-center rounded-full w-[40px] h-[40px] relative focus:outline-none">
        <Icon icon={faBell} className="text-gray-300" />

        <div className="bg-red-500 h-[9px] w-[9px] rounded-full absolute top-[1.5px] right-[1.5px]" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute right-[-143px] top-[65px] z-20 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4">
          <svg
            width="26"
            height="17"
            viewBox="0 0 26 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-[11px] right-10"
          >
            <path
              d="M10.7844 1.3404C12.0598 0.0518053 14.1416 0.0518043 15.417 1.3404L24.5403 10.5583C26.5771 12.6161 25.1194 16.1098 22.224 16.1098H3.97739C1.08203 16.1098 -0.375662 12.6161 1.66109 10.5583L10.7844 1.3404Z"
              fill="#1E1F29"
            />
          </svg>

          <div className="overflow-hidden rounded-md shadow-lg">
            <div className="relative bg-[#1E1F29] p-4">
              <div className="flex justify-between">
                <Text size="xl" weight="medium">
                  Notifications
                </Text>
                <Button
                  type="button"
                  color="warning"
                  size="xs"
                  className="rounded"
                >
                  Clear
                </Button>
              </div>

              <div className="mt-4 space-y-3">
                {solutions.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center rounded p-2 transition duration-150 ease-in-out bg-[#282934]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#363743] rounded">
                      <Image
                        src="/images/logo.png"
                        alt="Connor"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="ml-3">
                      <Text size="md" weight="medium" opacity={80}>
                        {item.name}
                      </Text>
                      <Text size="sm" opacity={50}>
                        {item.description}
                      </Text>
                    </div>
                  </div>
                ))}

                {!solutions.length && (
                  <div className="w-full h-28 bg-[#282934] rounded flex justify-center items-center">
                    <Text opacity={50}>
                      <Icon icon={faFaceMeh} size="xl" className="mr-2" />
                      No notifications. Check back later.
                    </Text>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
