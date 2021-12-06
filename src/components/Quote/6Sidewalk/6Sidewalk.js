import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { useEffect, useState } from 'react';
import NextButton from '../../CustomComponents/NextButton';
import Door from '../../../a_assets/images/door.png';
import Close from '../../../a_assets/images/close.png';

function Sidewalk(props) {

  let dispatch = useDispatch();

  const sidewalk1 = ['One Door', 'Two Doors'];
  const sidewalk2 = ['Three Doors', 'None'];
  const pics1 = [Door, Door];
  const pics2 = [Door, Close];


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
      payload: { divisor: 9, step_number: step_number + 1 }
    });
    props.history.push('./email');
  };

  return (
    <div className="quoteStep_container">
      <h2 className='quoteStep_container_title'>Would you like us to shovel and salt to any locations?</h2>
      <p className='quoteStep_container_descrip'>We charge for the amount of doors or locations we shovel to.<br></br>Examples: front door, back door, garbage cans, city sidewalk, etc.</p>

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
          if (props.store.customerInfo.sidewalk) {
            sendInfo({ service: props.store.customerInfo.sidewalk }, 'forward');
          } else {
            sendInfo(values);
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className='quoteStep_optionsContainer qs_optionsContDriveway' role="group" aria-labelledby="my-radio-group">
              {sidewalk1.map((s, i) => (
                <div className='quoteStep_options qs_optionsdriveway'>
                  <label key={s}>
                    <p className='quoteStep_label'>{s}</p>
                    <Field
                      type="radio"
                      name="sidewalk"
                      value={s}
                      checked={isChecked === s}
                      onClick={e => setIsChecked(e.target.value)}
                    />
                    <img src={pics1[i]} alt={s} className='quoteStep_label_img qsdriveway' />
                  </label>
                </div>
              ))}
            </div>
            <div className='quoteStep_optionsContainer qs_optionsContDriveway' role="group" aria-labelledby="my-radio-group">
              {sidewalk2.map((s, i) => (
                <div className='quoteStep_options qs_optionsdriveway'>
                  <label key={s}>
                    <p className='quoteStep_label'>{s}</p>
                    <Field
                      type="radio"
                      name="sidewalk"
                      value={s}
                      checked={isChecked === s}
                      onClick={e => setIsChecked(e.target.value)}
                    />
                    <img src={pics2[i]} alt={s} className='quoteStep_label_img qsdriveway' />
                  </label>
                </div>
              ))}
            </div>
            <ErrorMessage name="sidewalk" component="div" />
            <div className='quoteStep_nextBtn_container'>
              <NextButton disabled={isSubmitting} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(Sidewalk));