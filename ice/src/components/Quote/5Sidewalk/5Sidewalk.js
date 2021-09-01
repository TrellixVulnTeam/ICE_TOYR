import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Step5(props) {

  let dispatch = useDispatch();

  const goForward = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 6, step_number: 6 }
    });
    props.history.push('./back-to-black');
  }

  const goBack = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 6, step_number: 4 }
    });
    props.history.push('./driveway');
  }

  return (
    <div className='quote'>
      <button onClick={goBack}>Go to driveway</button>
      <button onClick={goForward}>Go to Back to Black</button>

    </div>
  );
}

export default connect()(withRouter(Step5));