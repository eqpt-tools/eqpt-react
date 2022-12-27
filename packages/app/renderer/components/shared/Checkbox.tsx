import React, { ChangeEventHandler } from 'react';

interface Props {
  checked: boolean;
  setChecked: ChangeEventHandler<HTMLInputElement>;
}

export default function Checkbox({ checked, setChecked }: Props) {
  return <input type="checkbox" checked={checked} onChange={setChecked} />;
}
