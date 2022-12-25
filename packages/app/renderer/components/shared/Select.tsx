import React, { Fragment, useMemo } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { faCheck } from '@fortawesome/pro-solid-svg-icons/faCheck';
import { faChevronDown } from '@fortawesome/pro-solid-svg-icons/faChevronDown';
import clsx from 'clsx';
import Icon from './Icon';
import Text from './Text';

interface Option {
  label: string;
  value: string;
}

export interface Props {
  name: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function Select({
  name,
  options,
  value,
  onChange,
  className,
}: Props) {
  const selectedValue = useMemo(
    () => options.find((o) => o.value === value),
    [options, value],
  );

  return (
    <Listbox name={name} value={value || ''} onChange={onChange}>
      <div className="relative">
        <Listbox.Button
          className={clsx(
            'relative w-full rounded-lg bg-[#22242D] py-3 pl-5 pr-10 text-left focus:outline-none',
            className,
          )}
        >
          <Text size="sm" opacity={60} weight="semibold" truncate>
            {selectedValue?.label || 'Select an option...'}
          </Text>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
            <Icon icon={faChevronDown} className="text-gray-400" />
          </span>
        </Listbox.Button>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#22242D] py-1 text-base shadow-lg focus:outline-none">
            {options.map((option) => (
              <Listbox.Option
                key={option.value}
                className="relative select-none py-2 pl-10 pr-4 hover:cursor-pointer text-gray-900 hover:bg-indigo-500/10 hover:text-indigo-900"
                value={option.value}
              >
                {({ selected }) => (
                  <>
                    <Text size="sm" opacity={60} weight="semibold" truncate>
                      {option.label}
                    </Text>

                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <Icon icon={faCheck} className="text-gray-400" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
