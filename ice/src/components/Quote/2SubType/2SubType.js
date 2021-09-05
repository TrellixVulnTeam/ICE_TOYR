import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { useEffect, useState } from 'react';
import NextButton from '../../CustomComponents/NextButton';

function SubService(props) {

  let dispatch = useDispatch();

  const subServices = ['Residential', 'Commercial'];
  const [isChecked, setIsChecked] = useState('');

  useEffect(() => {
    setIsChecked(props.store.customerInfo.subServices);
  }, [props.store.customerInfo.subServices]);

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
    props.history.push('./location');
  };

  return (
    <div className='quote'>

      <h2>Is this for residential or commercial?</h2>

      <Formik
        initialValues={{ subServices: '' }}
        validate={values => {
          const errors = {};

          if (props.store.customerInfo.subServices) {
            return errors;
          }
          if (!values.subServices) {
            errors.subServices = 'Please pick an option';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {

            if (props.store.customerInfo.subServices) {
              sendInfo({ service: props.store.customerInfo.subServices }, 'forward');
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
              {subServices.map(s => (
                <label key={s}>
                  <Field
                    type="radio"
                    name="subServices"
                    value={s}
                    checked={isChecked === s}
                    onClick={e => setIsChecked(e.target.value)}
                  />
                  {s}
                </label>
              ))}
            </div>
            <ErrorMessage name="subServices" component="div" />
            <NextButton disabled={isSubmitting} />
          </Form>
        )}
      </Formik>

      <p>Hi, {props.store.customerInfo.name}!</p>


    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(SubService));