import React, { useCallback } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
import { useRouter } from 'next/router';
import Input from '../../components/shared/Input';
import Button from '../../components/shared/Button';
import { alertSuccess } from '../../helpers/toast';

const initialValues = {
  licenseKey: '',
};

const validationSchema = Yup.object().shape({
  licenseKey: Yup.string().required('Please enter a license key.'),
});

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = useCallback(
    (values: FormikValues) => {
      console.log(values);
      // TODO: This should say: Welcome back, {user.username}
      alertSuccess('Success. Logging you in...');
      router.push('/');
    },
    [router],
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
              className="rounded-md rounded-l-none"
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
