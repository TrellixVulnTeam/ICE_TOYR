import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import mapStoreToProps from '../../../redux/mapStoreToProps';

function TypeService(props) {

  let dispatch = useDispatch();

  const sendInfo = (values, path) => {
    switch (path) {
      case 'forward':
        dispatch({
          type: 'UPDATE_CUSTOMER',
          payload: values
        });
        dispatch({
          type: 'QUOTE_PROGRESS',
          payload: { divisor: 7, step_number: 2 }
        });
        props.history.push('./sub-service');
        break;
      case 'back':
        dispatch({
          type: 'QUOTE_PROGRESS',
          payload: { divisor: 7, step_number: 1 }
        });
        props.history.push('./name-email');
        break;
      default:
    }
  };

  return (
    <div>
      <h2>What type of service would you like?</h2>


      <Formik
        initialValues={{ service: '' }}
        validate={values => {
          const errors = {};
          if (!values.service) {
            errors.service = 'Please pick an option';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            sendInfo(values, 'forward');
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="service" value='Snow Removal' />
                Snow Removal
              </label>
              <label>
                <Field type="radio" name="service" value="Excavating" />
                Excavating
              </label>
            </div>
            <ErrorMessage name="service" component="div" />
            <button onClick={() => sendInfo('', 'back')}>Go to name and email</button>
            <button type="submit" disabled={isSubmitting}>Go to location</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(TypeService));