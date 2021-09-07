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
    <div className='quoteStep_container'>

      <h2 className='quoteStep_container_title'>Does this look right to you?</h2>
      <p className='quoteStep_container_descrip'>If so, please confirm.</p>
      <div className='quoteStep_nextBtn_container'>
        <button className='btn primary_btn' onClick={sendInfo}>Confirm</button>
      </div>
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(Confirm));