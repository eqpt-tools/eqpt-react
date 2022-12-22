import React from 'react';
import { ErrorMessage } from 'formik';

interface Props {
  name: string;
}

export default function ErrorLabel({ name }: Props) {
  return (
    <ErrorMessage
      component="div"
      className="text-sm text-red-400 mt-1.5"
      name={name}
    />
  );
}
