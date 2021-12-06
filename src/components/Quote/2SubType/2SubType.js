import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { useEffect, useState } from 'react';
import NextButton from '../../CustomComponents/NextButton';
import Residential from '../../../a_assets/images/residential_plowing.png';
import Commercial from '../../../a_assets/images/commercial_plowing.png';

function SubService(props) {

  let dispatch = useDispatch();

  const subServices = ['Residential', 'Commercial'];
  const pics = [Residential, Commercial];

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
      payload: { divisor: 9, step_number: step_number + 1 }
    });
    props.history.push('./name');
  };


  return (
    <div className='quoteStep_container'>

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
          if (props.store.customerInfo.subServices) {
            sendInfo({ service: props.store.customerInfo.subServices }, 'forward');
          } else {
            sendInfo(values);
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className='quoteStep_optionsContainer' role="group" aria-labelledby="my-radio-group">
              {subServices.map((s, i) => (
                <div key={s} className='quoteStep_options'>
                  <label>
                    <p className='quoteStep_label'>{s}</p>
                    <Field
                      type="radio"
                      name="subServices"
                      value={s}
                      checked={isChecked === s}
                      onClick={e => setIsChecked(e.target.value)}
                    />
                    <img src={pics[i]} alt={s} className='quoteStep_label_img' />
                  </label>
                </div>
              ))}
            </div>
            <ErrorMessage name="subServices" component="div" />
            <div className='quoteStep_nextBtn_container'>
              <NextButton disabled={isSubmitting} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(SubService));