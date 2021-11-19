import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useFormik } from 'formik';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import NextButton from '../../CustomComponents/NextButton';

function Location(props) {

  let dispatch = useDispatch();

  const sendInfo = (values) => {
    let step_number = props.store.quoteProgress.step_number;
    dispatch({
      type: 'UPDATE_CUSTOMER',
      payload: values
    });
    if (props.store.customerInfo.service === 'Excavating') {
      dispatch({
        type: 'QUOTE_PROGRESS',
        payload: { divisor: 9, step_number: 8 }
      });
      props.history.push('./confirm');
    }
    // If commercial is selected skip past the driveway and sidewalk steps
    else if (props.store.customerInfo.subServices === 'Commercial') {
      console.log('we got commercial!!!');
      dispatch({
        type: 'QUOTE_PROGRESS',
        payload: { divisor: 9, step_number: step_number + 3 }
      });
      props.history.push('./email');
    } else {
      dispatch({
        type: 'QUOTE_PROGRESS',
        payload: { divisor: 9, step_number: step_number + 1 }
      });
      props.history.push('./driveway');
    }
  };

  const validate = values => {
    const errors = {};

    if (!values.street) {
      errors.street = 'Required';
    }

    if (!values.city) {
      errors.city = 'Required';
    }

    if (!values.state) {
      errors.state = 'Required';
    }

    if (!values.zipcode) {
      errors.zipcode = 'Required';
    }
    return errors;
  };

  let data = props.store.customerInfo;

  const formik = useFormik({
    initialValues: {
      street: data.street === '' ? '' : data.street,
      apartment: data.apartment === '' ? '' : data.apartment,
      city: data.city === '' ? '' : data.city,
      state: data.state === '' ? '' : data.state,
      zipcode: data.zipcode === '' ? '' : data.zipcode,
    },
    validate,
    onSubmit: (values) => {
      sendInfo(values);
    },
  });

  return (
    <div className="quoteStep_container">

      <h2 className='quoteStep_container_title'>What's your address?</h2>
      <p className='quoteStep_container_title'>This info helps us verify the address is in our servicable area.</p>

      <div className='quoteStep_formContainer'>
        <form onSubmit={formik.handleSubmit}>
          <div className='quoteStep_textFormContainer'>
            {/* Street */}
            <div className='quoteStep_textContainer'>
              <label className='quoteStep_label' htmlFor="street">Street</label>
              <input
                className='quoteStep_text quoteStep_street'
                id="street"
                name="street"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.street}
              />
              {formik.errors.street ? <div>{formik.errors.street}</div> : null}
            </div>
            {/* Apartment */}
            <div className='quoteStep_textContainer'>
              <label className='quoteStep_label' htmlFor="apartment">Apartment</label>
              <input
                className='quoteStep_text quoteStep_apt'
                id="apartment"
                name="apartment"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.apartment}
              />
              {formik.errors.apartment ? <div>{formik.errors.apartment}</div> : null}
            </div>
            {/* City */}
            <div className='quoteStep_textContainer'>
              <label className='quoteStep_label' htmlFor="city">City</label>
              <input
                className='quoteStep_text quoteStep_city'
                id="city"
                name="city"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.city}
              />
              {formik.errors.city ? <div>{formik.errors.city}</div> : null}
            </div>
            {/* State */}
            <div className='quoteStep_textContainer'>
              <label className='quoteStep_label' htmlFor="state">State</label>
              <input
                className='quoteStep_text quoteStep_state'
                id="state"
                name="state"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.state}
              />
              {formik.errors.state ? <div>{formik.errors.state}</div> : null}
            </div>
            {/* Zipcode */}
            <div className='quoteStep_textContainer'>
              <label className='quoteStep_label' htmlFor="zipcode">Zipcode</label>
              <input
                className='quoteStep_text quoteStep_zipcode'
                id="zipcode"
                name="zipcode"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.zipcode}
              />
              {formik.errors.zipcode ? <div>{formik.errors.zipcode}</div> : null}
            </div>
          </div>
          <div className='quoteStep_nextBtn_container'>
            <NextButton />
          </div>
        </form>
      </div>
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(Location));