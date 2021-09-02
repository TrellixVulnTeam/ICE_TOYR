import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

function ThankYou(props) {

  let dispatch = useDispatch();

  const goForward = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 6, step_number: 0 }
    });
    props.history.push('/');
  }

  const goBack = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 6, step_number: 5 }
    });
    props.history.push('./back-to-black');
  }

  return (
    <div className='quote'>

      <h2>Thank You</h2>
      <p>Thank you for submitting this form!</p>
      <button onClick={goBack}>Go to Back to Black</button>
      <button onClick={goForward}>Go home</button>

    </div>
  );
}

export default connect()(withRouter(ThankYou));