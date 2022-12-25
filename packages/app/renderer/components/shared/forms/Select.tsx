import React, { useCallback } from 'react';
import clsx from 'clsx';
import { FieldProps, useField } from 'formik';
import CoreSelect, { Props } from '../Select';

export default function Select({ name, ...props }: Props & FieldProps) {
  const [, meta, helpers] = useField(name);

  const handleChange = useCallback(
    (value: string) => {
      helpers.setValue(value);
    },
    [helpers],
  );

  return (
    <CoreSelect
      {...props}
      name={name}
      className={clsx({ '!border-red-400': meta.touched && meta.error })}
      onChange={handleChange}
    />
  );
}
