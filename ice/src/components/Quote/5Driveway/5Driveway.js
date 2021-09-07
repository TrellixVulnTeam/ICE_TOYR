import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { useEffect, useState } from 'react';
import NextButton from '../../CustomComponents/NextButton';

import Single_Driveway from '../../../a_assets/images/single_driveway.png';
import Double_Driveway from '../../../a_assets/images/double_driveway.png';
import Triple_Driveway from '../../../a_assets/images/triple_driveway.png';
import ICE_Question from '../../../a_assets/images/ICE_Question.png';

function Driveway(props) {

  let dispatch = useDispatch();

  const driveway1 = ['Single Car', 'Double Car'];
  const driveway2 = ['Triple Car', 'My driveway is different'];
  const pics1 = [Single_Driveway, Double_Driveway];
  const pics2 = [Triple_Driveway, ICE_Question];

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
    <div className="quoteStep_container">
      <h2 className='quoteStep_container_title' >What type of driveway do you have?</h2>

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
            <div className='quoteStep_optionsContainer' role="group" aria-labelledby="my-radio-group">
              {driveway1.map((d, i) => (
                <div className='quoteStep_options'>
                  <label key={d}>
                    <p className='quoteStep_label'>{d}</p>
                    <Field
                      type="radio"
                      name="driveway"
                      value={d}
                      checked={isChecked === d}
                      onClick={e => setIsChecked(e.target.value)}
                    />
                    <img src={pics1[i]} alt={d} className='quoteStep_label_img' />
                  </label>
                </div>
              ))}
            </div>
            <div className='quoteStep_optionsContainer' role="group" aria-labelledby="my-radio-group">
              {driveway2.map((d, i) => (
                <div className='quoteStep_options'>
                  <label key={d}>
                    <p className='quoteStep_label'>{d}</p>
                    <Field
                      type="radio"
                      name="driveway"
                      value={d}
                      checked={isChecked === d}
                      onClick={e => setIsChecked(e.target.value)}
                    />
                    <img src={pics2[i]} alt={d} className='quoteStep_label_img' />
                  </label>
                </div>
              ))}
            </div>
            <ErrorMessage name="driveway" component="div" />
            <div className='quoteStep_nextBtn_container'>
              <NextButton disabled={isSubmitting} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(Driveway));