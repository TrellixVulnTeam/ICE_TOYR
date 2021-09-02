import { connect, useDispatch } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import { useEffect } from 'react';

import TypeService from './1TypeService/1TypeService';
import SubType from './2SubType/2SubType';
import Location from './3Location/3Location';
import Driveway from './4Driveway/4Driveway';
import Sidewalk from './5Sidewalk/5Sidewalk';
import BackToBlack from './6BackToBlack/6BackToBlack';
import ProgressBar from '../ProgressBar/ProgressBar';
import ThankYou from './7ThankYou/7ThankYou';

function Quote(props) {

  const dispatch = useDispatch();
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
      payload: { divisor: 6, step_number: 0 }
    });
    props.history.push('/');
  }

  return (
    <div className='quote'>
      <ProgressBar />
      <button onClick={goForward}>Exit Quote</button>

      <Route exact path={`${props.match.path}/type-of-service`} component={TypeService} />
      <Route exact path={`${props.match.path}/sub-service`} component={SubType} />
      <Route exact path={`${props.match.path}/location`} component={Location} />
      <Route exact path={`${props.match.path}/driveway`} component={Driveway} />
      <Route exact path={`${props.match.path}/sidewalk`} component={Sidewalk} />
      <Route exact path={`${props.match.path}/back-to-black`} component={BackToBlack} />
      <Route exact path={`${props.match.path}/thank-you`} component={ThankYou} />

    </div>

  );
}

export default connect()(withRouter(Quote));