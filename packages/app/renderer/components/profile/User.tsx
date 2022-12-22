import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Text from '../shared/Text';

export default function User() {
  return (
    <Link
      href="/settings"
      className="bg-[#1E1F29] hover:bg-[#1b1b26] transition flex items-center px-4 rounded-full h-[40px] relative focus:outline-none"
    >
      <Image
        src="/images/logo.png"
        className="mr-2"
        alt="Connor"
        width={20}
        height={20}
      />

      <Text opacity={70}>cnrstvns#0001</Text>
    </Link>
  );
}
