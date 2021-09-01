import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../../redux/mapStoreToProps';

function Step2(props) {

  let dispatch = useDispatch();

  const goForward = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 6, step_number: 3 }
    });
    props.history.push('./location');
  }

  const goBack = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 6, step_number: 1 }
    });
    props.history.push('./type-of-service');
  }

  return (
    <div className='quote'>
      <button onClick={goBack}>Go to type of service</button>
      <button onClick={goForward}>Go to location</button>

      <p>Hi, {props.store.customerInfo.firstName} {props.store.customerInfo.lastName}!</p>


    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(Step2));