import { connect, useDispatch } from 'react-redux';
import { withRouter, Route, useHistory } from 'react-router-dom';
import { useEffect } from 'react';

import TypeService from './1TypeService/1TypeService';
import SubType from './2SubType/2SubType';
import Name from './3Name/3Name';
import Location from './4Location/4Location';
import Driveway from './5Driveway/5Driveway';
import Sidewalk from './6Sidewalk/6Sidewalk';
import Email from './7Email/7Email';
import BackToBlack from './8BackToBlack/8BackToBlack';
import Confirm from './9Confirm/9Confirm';
import ThankYou from './10ThankYou/10ThankYou';
import ProgressBar from '../CustomComponents/ProgressBar';
import BackButton from '../CustomComponents/BackButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

function Quote(props) {

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {

    document.body.scrollTop = document.documentElement.scrollTop = 0;

    let pathname = document.URL.search('/quote');

    dispatch({
      type: 'CHECK_FOR_QUOTE',
      payload: pathname
    });
  }, [dispatch]);

  const goForward = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 9, step_number: 0 }
    });
    props.history.push('/');
  }

  const goBack = () => {
    let step_number = props.store.quoteProgress.step_number;
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 9, step_number: step_number - 1 }
    });
    history.goBack();
  }

  return (
    <div className='quote'>
      <ProgressBar />
      {props.store.quoteProgress.step_number === 9 ? '' :
        <div className='quote_backBtnPos'>
          <BackButton click={goBack} />
        </div>
      }

      <Route exact path={`${props.match.path}/name`} component={Name} />
      <Route exact path={`${props.match.path}/type-of-service`} component={TypeService} />
      <Route exact path={`${props.match.path}/sub-service`} component={SubType} />
      <Route exact path={`${props.match.path}/location`} component={Location} />
      <Route exact path={`${props.match.path}/driveway`} component={Driveway} />
      <Route exact path={`${props.match.path}/sidewalk`} component={Sidewalk} />
      <Route exact path={`${props.match.path}/email`} component={Email} />
      <Route exact path={`${props.match.path}/back-to-black`} component={BackToBlack} />
      <Route exact path={`${props.match.path}/confirm`} component={Confirm} />
      <Route exact path={`${props.match.path}/thank-you`} component={ThankYou} />
      {props.store.quoteProgress.step_number === 9 ? '' :
        <div className='quote_b231'>
          <p>Not interested in your quote any more?</p>
          <button className='quote_closeBtn' onClick={goForward}>Exit quote request </button>
        </div>
      }
    </div>

  );
}

export default connect(mapStoreToProps)(withRouter(Quote));