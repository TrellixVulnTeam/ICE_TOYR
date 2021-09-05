import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../../redux/mapStoreToProps';

function Confirm(props) {

  let dispatch = useDispatch();

  const sendInfo = () => {

    let step_number = props.store.quoteProgress.step_number;

    dispatch({
      type: 'ADD_CUSTOMER',
      payload: props.store.customerInfo
    });
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 8, step_number: step_number + 1 }
    });
    props.history.push('./thank-you');
  };

  return (
    <div>

      <h2>Does this look right to you?</h2>
      <p>If so, please confirm.</p>
      <button className='btn primary_btn' onClick={sendInfo}>Confirm</button>

    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(Confirm));