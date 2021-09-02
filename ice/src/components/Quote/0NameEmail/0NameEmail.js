import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function NameEmail(props) {

  let dispatch = useDispatch();

  const sendInfo = (values) => {
    console.log('checking values: ', values);
    dispatch({
      type: 'UPDATE_CUSTOMER',
      payload: values
    });
  }

  const goForward = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 7, step_number: 1 }
    });
    props.history.push('./type-of-service');
  }

  const goBack = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 7, step_number: 0 }
    });
    props.history.push('/')
  }

  return (
    <div>

      <h2>What is your name and email?</h2>
      <p>We are happy you are interested in a getting a quote!</p>
      <p>So that we know who to call you and so that we can send you the details of your quote what is your email address?</p>


      <br></br>

      <Formik
        initialValues={{ email: '', name: '' }}
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
            console.log(values);

            alert(JSON.stringify(values, null, 2));
            goForward();
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="name" name="name" required />
            <ErrorMessage name="name" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Go to type of service
            </button>
          </Form>
        )}
      </Formik>



      <button onClick={goBack}>Go home</button>
    </div>
  );
}

export default connect()(withRouter(NameEmail));