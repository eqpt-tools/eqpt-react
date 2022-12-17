import React from 'react';

interface Props {
  title: string;
}

// TODO: Add item count
export default function PageTitle({ title }: Props) {
  return <div className="text-3xl font-semibold text-[#DADEE4]">{title}</div>;
}
