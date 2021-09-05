import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { useEffect, useState } from 'react';
import NextButton from '../../CustomComponents/NextButton';

function Sidewalk(props) {

  let dispatch = useDispatch();

  const sidewalk = ['1', '2', '3', 'none'];
  const [isChecked, setIsChecked] = useState('');

  useEffect(() => {
    setIsChecked(props.store.customerInfo.sidewalk);
  }, [props.store.customerInfo.sidewalk]);

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
    props.history.push('./email');
  };

  return (
    <div>

      <h2>Would you like us to shovel and salt any sidewalks?</h2>
      <p>We charge for the amount of doors or locations we shovel to.
        Examples: front door, back door, garbage cans, city sidewalk, etc.</p>

      <Formik
        initialValues={{ sidewalk: '' }}
        validate={values => {
          const errors = {};

          if (props.store.customerInfo.sidewalk) {
            return errors;
          }
          if (!values.sidewalk) {
            errors.sidewalk = 'Please pick an option';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {

            if (props.store.customerInfo.sidewalk) {
              sendInfo({ service: props.store.customerInfo.sidewalk }, 'forward');
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
              {sidewalk.map(s => (
                <label key={s}>
                  <Field
                    type="radio"
                    name="sidewalk"
                    value={s}
                    checked={isChecked === s}
                    onClick={e => setIsChecked(e.target.value)}
                  />
                  {s}
                </label>
              ))}
            </div>
            <ErrorMessage name="sidewalk" component="div" />
            <NextButton disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(Sidewalk));