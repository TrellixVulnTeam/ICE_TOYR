import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Step3(props) {

  let dispatch = useDispatch();

  const goForward = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 6, step_number: 4 }
    });
    props.history.push('./driveway');
  }

  const goBack = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 6, step_number: 2 }
    });
    props.history.push('./sub-service');
  }

  return (
    <div className='quote'>
      <button onClick={goBack}>Go to sub service</button>
      <button onClick={goForward}>Go to driveway</button>

    </div>
  );
}

export default connect()(withRouter(Step3));