import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faCopy } from '@fortawesome/free-solid-svg-icons/faCopy';
import React from 'react';
import Button from '../../shared/Button';
import Text from '../../shared/Text';

export default function LicenseDetails() {
  return (
    <div className="px-10 py-8">
      <div className="mb-5">
        <Text size="xl" weight="semibold">
          Key Information
        </Text>
      </div>
      <div className="flex flex-row space-x-3">
        <div className="bg-[#27272A] text-[#A1A2A8] px-3 py-1.5 rounded inline-block">
          <Text size="sm" weight="medium" opacity={60} tracking="widest">
            •••• •••• •••• ABCD
          </Text>
        </div>
        <Button type="button" icon={faEye} color="secondary" size="xs" />
        <Button type="button" icon={faCopy} color="secondary" size="xs" />
      </div>
    </div>
  );
}
