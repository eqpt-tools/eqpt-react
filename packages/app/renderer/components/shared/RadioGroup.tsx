import React from 'react';
import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react';
import clsx from 'clsx';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Icon from './Icon';

interface Option {
  name: string;
  description: string;
  icon?: IconDefinition;
}

interface Props {
  name: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

export default function RadioGroup({ name, options, value, onChange }: Props) {
  return (
    <div className="w-full">
      <HeadlessRadioGroup name={name} value={value} onChange={onChange}>
        <div className="space-y-2">
          {options.map((option) => (
            <HeadlessRadioGroup.Option
              key={option.name}
              value={option.name}
              className={({ checked }) =>
                clsx(
                  'relative flex cursor-pointer rounded-md px-5 py-4 shadow-md focus:outline-none bg-[#22242D] border-2 transition',
                  {
                    'bg-sky-900 bg-opacity-75 text-white border-indigo-500':
                      checked,
                    'border-transparent': !checked,
                  },
                )
              }
            >
              {({ checked }) => (
                <div className="flex w-full items-center space-x-4">
                  {option.icon && (
                    <div className="flex flex-col">
                      <Icon
                        icon={option.icon}
                        size="lg"
                        className={clsx('inline', {
                          'text-white': checked,
                          'text-gray-500': !checked,
                        })}
                      />
                    </div>
                  )}
                  <div className="flex items-center">
                    <div className="text-sm">
                      <HeadlessRadioGroup.Label
                        as="p"
                        className={clsx('font-medium', {
                          'text-white': checked,
                          'text-gray-400': !checked,
                        })}
                      >
                        {option.name}
                      </HeadlessRadioGroup.Label>
                      <HeadlessRadioGroup.Description
                        as="span"
                        className={clsx('inline', {
                          'text-white opacity-70': checked,
                          'text-gray-500': !checked,
                        })}
                      >
                        <span>{option.description}</span>
                      </HeadlessRadioGroup.Description>
                    </div>
                  </div>
                </div>
              )}
            </HeadlessRadioGroup.Option>
          ))}
        </div>
      </HeadlessRadioGroup>
    </div>
  );
}
