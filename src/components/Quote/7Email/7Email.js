import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useFormik } from 'formik';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import NextButton from '../../CustomComponents/NextButton';

function Email(props) {

  let dispatch = useDispatch();

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
    props.history.push('./back-to-black');
  };

  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: props.store.customerInfo.email === '' ? '' : props.store.customerInfo.email,
    },
    validate,
    onSubmit: (values) => {
      sendInfo(values);
    },
  });

  return (
    <div className='quoteStep_container'>

      <h2 className='quoteStep_container_title' >Where can we send this quote?</h2>
      <p className='quoteStep_container_descrip'>We use your email for communication purposes only.<br></br>We do not sell or give your data to anybody else.</p>

      <div className='quoteStep_formContainer'>
        <form onSubmit={formik.handleSubmit}>
          <div className='quoteStep_textFormContainer'>
            <div className='quoteStep_textContainer'>
              <label className='quoteStep_label' htmlFor="email">Email</label>
              <input
                className='quoteStep_text quoteStep_email'
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
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

export default connect(mapStoreToProps)(withRouter(Email));