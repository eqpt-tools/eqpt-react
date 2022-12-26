// import { Field, Form, Formik, FormikValues } from 'formik';
import React, { useCallback, useState } from 'react';
// import * as Yup from 'yup';
// import { faTrash } from '@fortawesome/pro-solid-svg-icons/faTrash';
import Button from '../components/shared/Button';
// import ErrorLabel from '../components/shared/forms/ErrorLabel';
// import Input from '../components/shared/Input';
// import Label from '../components/shared/forms/Label';
// import Modal from '../components/shared/Modal';
// import { alertSuccess } from '../helpers/toast';
import AppLayout from '../layouts/App';
// import Select from '../components/shared/forms/Select';
// import QuickActions from '../components/shared/QuickActions';
import New from '../components/vault/new';

export default function Index() {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  // const handleSubmit = useCallback((values: FormikValues) => {
  //   setOpen(false);
  //   alertSuccess(`Saved horse: ${values.horse}`);
  // }, []);

  return (
    <AppLayout title="Index">
      <AppLayout.Scroll>
        <Button type="button" size="lg" color="primary" onClick={handleOpen}>
          Open modal
        </Button>
        <div className="p-4" />
      </AppLayout.Scroll>

      <New open={open} onClose={handleClose} />

      {/* <Modal open={open} onClose={handleClose}>
        <Formik
          validateOnBlur={false}
          initialValues={{ horse: '' }}
          validationSchema={Yup.object().shape({
            horse: Yup.string().required(
              'Please decide upon a horse before submitting.',
            ),
            horseTwo: Yup.string().required(
              'Please decide upon a horse before submitting.',
            ),
          })}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty }) => (
            <Form>
              <Modal.Header
                title="Horselo (Hello) World"
                subtitle="Welcome to my first modal."
              />
              <Modal.Body>
                <div className="flex space-x-3">
                  <div className="w-full">
                    <Label name="horse">Horse</Label>
                    <Field
                      as={Input}
                      name="horse"
                      size="lg"
                      placeholder="Input a horse..."
                    />
                    <ErrorLabel name="horse" />
                  </div>
                  <div className="w-full">
                    <Label name="horseTwo">Horse 2</Label>
                    <Field
                      as={Select}
                      name="horseTwo"
                      size="md"
                      placeholder="Input a horse..."
                      options={[
                        { label: 'Horse 1', value: 'bro1' },
                        { label: 'Horse 2', value: 'bro2' },
                        { label: 'Horse 3', value: 'bro3' },
                        { label: 'Horse 4', value: 'bro4' },
                        { label: 'Horse 5', value: 'bro5' },
                      ]}
                    />
                    <ErrorLabel name="horseTwo" />
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <div className="flex justify-between">
                  <Button
                    type="button"
                    size="sm"
                    color="warning-transparent"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    size="sm"
                    color="primary"
                    disabled={!dirty || !isValid}
                  >
                    Submit
                  </Button>
                </div>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal> */}
    </AppLayout>
  );
}
