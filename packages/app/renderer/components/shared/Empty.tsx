import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Text from './Text';
import Icon from './Icon';

interface Props {
  title: string;
  subtitle: string;
  icon: IconDefinition;
}

export default function Empty({ title, subtitle, icon }: Props) {
  return (
    <div className="w-full rounded-md border-2 border-[#2E2F3A] min-h-[12rem] flex items-center justify-center bg-[#1b1a20]">
      <div className="flex space-x-4">
        <div className="w-12 h-12 rounded-md flex items-center justify-center bg-gray-800 text-white">
          <Icon icon={icon} size="lg" />
        </div>

        <div className="flex flex-col">
          <Text size="xl" weight="medium">
            {title}
          </Text>
          <Text opacity={70}>{subtitle}</Text>
        </div>
      </div>
    </div>
  );
}
