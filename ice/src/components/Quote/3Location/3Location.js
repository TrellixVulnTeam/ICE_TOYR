import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Step3(props) {

  let dispatch = useDispatch();

  const goForward = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 6, step_number: 3 }
    });
    props.history.push('./driveway');
  }

  const goBack = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 6, step_number: 1 }
    });
    props.history.push('./sub-service');
  }

  return (
    <div className='quote'>

      <h2>What's your address?</h2>
      <p>This info helps us verify the address is in our servisable area.</p>

      <br></br>

      <button onClick={goBack}>Go to sub service</button>
      <button onClick={goForward}>Go to driveway</button>

    </div>
  );
}

export default connect()(withRouter(Step3));