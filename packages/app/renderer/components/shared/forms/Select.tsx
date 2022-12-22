import React, { useCallback } from 'react';
import clsx from 'clsx';
import { FieldProps, useField, useFormikContext } from 'formik';
import CoreSelect, { Props } from '../Select';

export default function Select({ name, ...props }: Props & FieldProps) {
  const [, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = useCallback(
    (value: string) => {
      setFieldValue(name, value);
    },
    [name, setFieldValue],
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
