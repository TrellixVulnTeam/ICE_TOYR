import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Step4(props) {

  let dispatch = useDispatch();

  const goForward = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 6, step_number: 5 }
    });
    props.history.push('./sidewalk');
  }

  const goBack = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 6, step_number: 3 }
    });
    props.history.push('./location');
  }

  return (
    <div className='quote'>
      <button onClick={goBack}>Go to location</button>
      <button onClick={goForward}>Go to sidewalk</button>

    </div>
  );
}

export default connect()(withRouter(Step4));