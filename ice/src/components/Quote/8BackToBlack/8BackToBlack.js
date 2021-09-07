import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import NextButton from '../../CustomComponents/NextButton';

function BackToBlack(props) {

  let dispatch = useDispatch();

  const sendInfo = () => {
    let step_number = props.store.quoteProgress.step_number;
    // dispatch({
    //   type: 'UPDATE_CUSTOMER',
    //   payload: values
    // });
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 8, step_number: step_number + 1 }
    });
    props.history.push('./confirm');
  };

  return (
    <div className='quoteStep_container'>
      <h2 className='quoteStep_container_title'>Back to Black</h2>
      <p className='quoteStep_container_descrip'>Consider our Back to Black service for premium support and service.</p>

      <div className='quoteStep_nextBtn_container'>
        <NextButton click={sendInfo} />
      </div>
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(BackToBlack));