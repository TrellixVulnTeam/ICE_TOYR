import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import NextButton from '../../CustomComponents/NextButton';

function Email(props) {

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
    props.history.push('./back-to-black');
  };

  return (
    <div>

      <h2>What is your name and email?</h2>
      <p>We are happy you are interested in a getting a quote!</p>
      <p>So that we know who to call you and so that we can send you the details of your quote what is your email address?</p>

      <Formik
        initialValues={{ email: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {

            sendInfo(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" required />
            <ErrorMessage name="email" component="div" />
            <NextButton disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(Email));