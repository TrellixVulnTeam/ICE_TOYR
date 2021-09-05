import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { useEffect, useState } from 'react';
import NextButton from '../../CustomComponents/NextButton';

function Driveway(props) {

  let dispatch = useDispatch();

  const driveway = ['Single Car', 'Double Car', 'Triple Car', 'My driveway is different'];
  const [isChecked, setIsChecked] = useState('');

  useEffect(() => {
    setIsChecked(props.store.customerInfo.driveway);
  }, [props.store.customerInfo.driveway]);

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
    props.history.push('./sidewalk');
  };

  return (
    <div>
      <h2>What type of driveway do you have?</h2>

      <Formik
        initialValues={{ driveway: '' }}
        validate={values => {
          const errors = {};

          if (props.store.customerInfo.driveway) {
            return errors;
          }
          if (!values.driveway) {
            errors.driveway = 'Please pick an option';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {

            if (props.store.customerInfo.driveway) {
              sendInfo({ service: props.store.customerInfo.driveway }, 'forward');
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
              {driveway.map(d => (
                <label key={d}>
                  <Field
                    type="radio"
                    name="driveway"
                    value={d}
                    checked={isChecked === d}
                    onClick={e => setIsChecked(e.target.value)}
                  />
                  {d}
                </label>
              ))}
            </div>
            <ErrorMessage name="driveway" component="div" />
            <NextButton disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(Driveway));