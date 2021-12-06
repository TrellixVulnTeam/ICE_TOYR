import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../../redux/mapStoreToProps';

function BackToBlack(props) {

  let dispatch = useDispatch();

  const standard = ['1.5” trigger', 'Shovel & salt sidewalks', 'Plow driveway up to cars', 'Pay per time', '–', '–', '–', '–'];
  const backToBlack = ['0.5” trigger', 'Shovel & salt sidewalks', 'Plow driveway up to cars', 'Next day window plowing', 'Next day drift & driveway cleanup', 'Next day ice melt driveway treatment', 'Next day drift & sidewalk cleanup', 'Guaranteed seasonal pricing'];

  const sendInfo = (values) => {
    let step_number = props.store.quoteProgress.step_number;

    dispatch({
      type: 'UPDATE_CUSTOMER',
      payload: values
    });
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 9, step_number: step_number + 1 }
    });
    props.history.push('./confirm');
  };

  return (
    <div className='quoteStep_container'>
      <h2 className='quoteStep_container_title'>Back to Black</h2>
      <p className='quoteStep_container_descrip'>Consider our Back to Black service for premium support and service.</p>

      <div className='quoteStep_b2b_container'>
        <div className='quoteStep_b2b_package_container'>
          <h3 className='quoteStep_subtitles'>Standard Package</h3>
          <div className='quoteStep_b2b standard'>
            <ul>
              {standard.map((item, i) =>
                <li className={i <= 3 ? 'package_item standard_item' : ' package_item no_item'}>{item}</li>
              )}
            </ul>
            <div className='b2n_btn_container'>
              <button
                className='btn b2b_btns'
                onClick={(e) => sendInfo({ back_to_black: "No" })}
              >Keep current selection</button>
            </div>
          </div>
        </div>
        <div className='quoteStep_b2b_package_container'>
          <h3 className='quoteStep_subtitles'>Back to Black Package</h3>
          <div className='quoteStep_b2b deluxe'>
            <ul>
              {backToBlack.map(item =>
                <li className='package_item deluxe_item'>{item}</li>
              )}
            </ul>
            <div className='b2n_btn_container'>
              <button
                className='btn b2b_btns'
                onClick={(e) => sendInfo({ back_to_black: "Yes" })}
              >See if I qualify</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(BackToBlack));