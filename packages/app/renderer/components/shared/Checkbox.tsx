import React, { ChangeEventHandler } from 'react';

interface Props {
  checked: boolean;
  setChecked: ChangeEventHandler<HTMLInputElement>;
  label?: string;
}

export default function Checkbox({ checked, setChecked, label }: Props) {
  return (
    <div className="flex space-x-2">
      <input type="checkbox" checked={checked} onChange={setChecked} />
      {label && <div className="block text-white/70 text-sm mb-1">{label}</div>}
    </div>
  );
}
