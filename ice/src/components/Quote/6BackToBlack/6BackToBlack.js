import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Step6(props) {

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
    props.history.push('./sidewalk');
  }

  return (
    <div className='quote'>
      <button onClick={goBack}>Go to driveway</button>
      <button onClick={goForward}>Go home</button>

    </div>
  );
}

export default connect()(withRouter(Step6));