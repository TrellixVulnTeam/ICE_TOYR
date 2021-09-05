import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import NextButton from '../../CustomComponents/NextButton';


function Name(props) {

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
    props.history.push('./type-of-service');
  };

  return (
    <div>

      <h2>What is your first name?</h2>
      <p>We will use this for a more personalized experience throughout this quote.</p>

      <Formik
        initialValues={{ name: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {

            sendInfo(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="name" name="name" required />
            <ErrorMessage name="name" component="div" />
            <NextButton disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(Name));