import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useFormik } from 'formik';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import NextButton from '../../CustomComponents/NextButton';


function Name(props) {

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
    props.history.push('./location');
  };

  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 15) {
      errors.name = 'Must be 15 characters or less';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: props.store.customerInfo.name === '' ? '' : props.store.customerInfo.name,
    },
    validate,
    onSubmit: (values) => {
      sendInfo(values);
    },
  });

  return (
    <div className='quoteStep_container'>

      <h2 className='quoteStep_container_title'>What is your first name?</h2>
      <p className='quoteStep_container_descrip'>We will use this for a more personalized experience throughout this quote.</p>

      <div className='quoteStep_formContainer'>
        <form onSubmit={formik.handleSubmit}>
          <div className='quoteStep_textFormContainer'>
            <div className='quoteStep_textContainer'>
              <label className='quoteStep_label' htmlFor="name">First Name</label>
              <input
                className='quoteStep_text quoteStep_name'
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name ? <div>{formik.errors.name}</div> : null}
            </div>
          </div>
          <div className='quoteStep_nextBtn_container'>
            <NextButton />
          </div>
        </form>
      </div>
    </div >
  );
}

export default connect(mapStoreToProps)(withRouter(Name));