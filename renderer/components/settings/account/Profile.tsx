import React from 'react';
import Image from 'next/image';
import Text from '../../shared/Text';

export default function Profile() {
  return (
    <div className="flex flex-row space-x-4">
      <div className="w-16 h-16 flex justify-center items-center rounded-full border-2 border-indigo-500">
        <div className="w-[3.3rem] h-[3.3rem]">
          <Image
            src="https://cnrstvns.dev/images/me.webp"
            width={52.8}
            height={52.8}
            className="rounded-full"
            alt="Profile picture"
          />
        </div>
      </div>
      <div className="flex flex-col my-auto">
        <Text size="xl" weight="semibold">
          cnrstvns#0001
        </Text>
        <Text size="sm" weight="medium" opacity={60}>
          Developer
        </Text>
      </div>
    </div>
  );
}
