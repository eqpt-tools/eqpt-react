import React from 'react';
import clsx from 'clsx';
import { FieldProps, useField } from 'formik';
import CoreInput, { Props } from '../Input';

export default function Input({ name, ...props }: Props & FieldProps) {
  const [, meta] = useField(name);

  return (
    <CoreInput
      name={name}
      className={clsx({ '!border-red-400': meta.touched && meta.error })}
      {...props}
    />
  );
}
