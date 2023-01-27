import React, { useCallback } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { faSignInAlt } from '@fortawesome/pro-solid-svg-icons/faSignInAlt';
import { useRouter } from 'next/router';
import Input from '../../components/shared/Input';
import Button from '../../components/shared/Button';
import { alertFailure, alertSuccess } from '../../helpers/toast';
import { trpc } from '../../helpers/trpc';

const initialValues = {
  licenseKey: '',
};

const validationSchema = Yup.object().shape({
  licenseKey: Yup.string().required('Please enter a license key.'),
});

export default function LoginForm() {
  const router = useRouter();

  const { mutateAsync: login } = trpc.settings.login.useMutation({
    onSuccess: () => {
      // TODO: This should say: Welcome back, {user.username}
      alertSuccess('Success. Logging you in...');
      router.push('/');
    },
    onError: () => {
      alertFailure('Invalid license key.');
    },
  });

  const handleSubmit = useCallback(
    (values: typeof initialValues) => {
      login(values);
    },
    [login],
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isValid, dirty }) => (
        <Form className="w-full">
          <div className="flex">
            <Field
              as={Input}
              name="licenseKey"
              placeholder="License key"
              className="rounded-md rounded-r-none"
              size="md"
            />
            <Button
              className="rounded-md rounded-l-none !px-4"
              color="primary"
              size="md"
              type="submit"
              disabled={!isValid || !dirty}
              icon={faSignInAlt}
            />
          </div>
          <ErrorMessage
            component="div"
            className="text-sm text-white mt-1.5"
            name="licenseKey"
          />
        </Form>
      )}
    </Formik>
  );
}
