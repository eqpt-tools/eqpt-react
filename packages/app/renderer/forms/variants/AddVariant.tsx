import React, { useCallback } from 'react';
import * as Yup from 'yup';
import { Field, Formik, Form } from 'formik';
import { faMagnifyingGlass } from '@fortawesome/pro-solid-svg-icons/faMagnifyingGlass';
import Input from '../../components/shared/forms/Input';
import Button from '../../components/shared/Button';
import { alertFailure, alertSuccess } from '../../helpers/toast';
import ErrorLabel from '../../components/shared/forms/ErrorLabel';
import useVariantContext from '../../context/VariantContext';
import { trpc } from '../../helpers/trpc';

const initialValues = {
  url: '',
};

const validationSchema = Yup.object().shape({
  url: Yup.string()
    .url('Please enter a valid URL.')
    .required('Please enter a product URL.'),
});

export default function AddVariant() {
  const trpcContext = trpc.useContext();
  const { setProduct } = useVariantContext();

  const { mutateAsync: addProduct, isLoading } =
    trpc.products.create.useMutation({
      onSuccess: (response) => {
        setProduct(response);
        alertSuccess(`Success. Saved ${response.title}`);

        trpcContext.products.list.invalidate();
      },
      onError: () => {
        alertFailure('Error fetching variant.');
      },
    });

  const handleSubmit = useCallback(
    (values: typeof initialValues) =>
      addProduct({
        url: values.url,
      }),
    [addProduct],
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isValid }) => (
        <Form>
          <div className="flex space-x-3">
            <Field as={Input} name="url" size="md" placeholder="Product URL" />
            <Button
              type="submit"
              size="md"
              color="primary"
              icon={faMagnifyingGlass}
              disabled={!isValid}
              loading={isLoading}
            >
              Scrape
            </Button>
          </div>
          <ErrorLabel name="url" />
        </Form>
      )}
    </Formik>
  );
}
