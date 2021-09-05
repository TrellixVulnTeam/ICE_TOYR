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
    <div>

      <h2>Back to Black</h2>
      <p>Consider our Back to Black service for premium support and service.</p>

      <NextButton
        click={sendInfo} />
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(BackToBlack));