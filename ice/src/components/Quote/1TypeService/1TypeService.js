import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { useEffect, useState } from 'react';
import NextButton from '../../CustomComponents/NextButton';

function TypeService(props) {

  let dispatch = useDispatch();

  const services = ['Snow Removal', 'Excavating'];
  const [isChecked, setIsChecked] = useState('');

  useEffect(() => {
    setIsChecked(props.store.customerInfo.service);
  }, [props.store.customerInfo.service]);

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
    props.history.push('./sub-service');
  };

  return (
    <div className="quoteStep_container">
      <h2>What type of service would you like?</h2>


      <Formik
        initialValues={{ service: '' }}
        validate={values => {
          const errors = {};

          if (props.store.customerInfo.service) {
            return errors;
          }
          if (!values.service) {
            errors.service = 'Please pick an option';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {

            if (props.store.customerInfo.service) {
              sendInfo({ service: props.store.customerInfo.service }, 'forward');
            } else {
              sendInfo(values);
            }
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div role="group" aria-labelledby="my-radio-group">
              {services.map(s => (
                <label key={s}>
                  <Field
                    type="radio"
                    name="service"
                    value={s}
                    checked={isChecked === s}
                    onClick={e => setIsChecked(e.target.value)}
                  />
                  {s}
                </label>
              ))}
            </div>
            <ErrorMessage name="service" component="div" />
            <NextButton disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(TypeService));