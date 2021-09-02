import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Step6(props) {

  let dispatch = useDispatch();

  const goForward = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 6, step_number: 6 }
    });
    props.history.push('./thank-you');
  }

  const goBack = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 6, step_number: 4 }
    });
    props.history.push('./sidewalk');
  }

  return (
    <div className='quote'>

      <h2>Back to Black</h2>
      <p>Consider our Back to Black service for premium support and service.</p>

      <br></br>
      <button onClick={goBack}>Go to driveway</button>
      <button onClick={goForward}>Submit</button>

    </div>
  );
}

export default connect()(withRouter(Step6));