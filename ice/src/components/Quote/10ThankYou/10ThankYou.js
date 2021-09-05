import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

function ThankYou(props) {

  const dispatch = useDispatch();

  const sendInfo = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 8, step_number: 0 }
    });
    props.history.push('/')
  };

  return (
    <div>

      <h2>Thank You</h2>
      <p>Thank you for submitting this form!</p>
      <button className='btn primary_btn' onClick={sendInfo}>Close Window</button>

    </div>
  );
}

export default connect()(withRouter(ThankYou));