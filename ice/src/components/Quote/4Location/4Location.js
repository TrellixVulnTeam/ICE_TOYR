import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import NextButton from '../../CustomComponents/NextButton';

function Location(props) {

  let dispatch = useDispatch();

  const sendInfo = (values) => {
    let step_number = props.store.quoteProgress.step_number;
    dispatch({
      type: 'UPDATE_CUSTOMER',
      payload: values
    });
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 8, step_number: step_number + 1 }
    });
    props.history.push('./driveway');
  };

  return (
    <div>

      <h2>What's your address?</h2>
      <p>This info helps us verify the address is in our servicable area.</p>

      <Formik
        initialValues={{ street: '', apartment: '', city: '', state: '', zipcode: '' }}
        validate={values => {
          const errors = {};
          if (!values.street) {
            console.log('got an error street');
            errors.street = 'Required';
          } else if (!values.apartment) {
            console.log('got an error apartment');
            errors.apartment = 'Required';
          } else if (!values.city) {
            console.log('got an error city');
            errors.city = 'Required';
          } else if (!values.state) {
            console.log('got an error state');
            errors.state = 'Required';
          } else if (!values.zipcode) {
            console.log('got an error zipcode');
            errors.zipcode = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log('hit onsubmit');

          setTimeout(() => {

            sendInfo(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="street" />
            <ErrorMessage name="street" component="div" />
            <Field type="text" name="apartment" />
            <ErrorMessage name="apartment" component="div" />
            <Field type="text" name="city" />
            <ErrorMessage name="city" component="div" />
            <Field type="text" name="state" />
            <ErrorMessage name="state" component="div" />
            <Field type="text" name="zipcode" />
            <ErrorMessage name="zipcode" component="div" />

            <NextButton disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(Location));