import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

function ThankYou(props) {

  const dispatch = useDispatch();

  const sendInfo = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 9, step_number: 0 }
    });
    props.history.push('/')
  };

  return (
    <div className='quoteStep_container'>
      <h2 className='quoteStep_container_title'>Thank You</h2>
      <p className='quoteStep_container_descrip'>Thanks for requesting a quote!<br></br>We will be in touch shortly.</p>
      <div className='quoteStep_nextBtn_container quoteStep_btn_close'>
        <button className='btn primary_btn' onClick={sendInfo}>Close Window</button>
      </div>
    </div>
  );
}

export default connect()(withRouter(ThankYou));