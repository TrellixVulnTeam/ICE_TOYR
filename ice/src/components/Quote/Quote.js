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

function Quote(props) {

  const dispatch = useDispatch();
  useEffect(() => {
    let pathname = document.URL.search('/quote');
    dispatch({
      type: 'CHECK_FOR_QUOTE',
      payload: pathname
    });
  }, [dispatch]);

  const goForward = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 6, step_number: 1 }
    });
    props.history.push('/quote/type-of-service');
  }

  return (
    <div className='quote'>
      <ProgressBar />
      <button onClick={goForward}>Start Quote</button>

      <Route exact path={`${props.match.path}/type-of-service`} component={TypeService} />
      <Route exact path={`${props.match.path}/sub-service`} component={SubType} />
      <Route exact path={`${props.match.path}/location`} component={Location} />
      <Route exact path={`${props.match.path}/driveway`} component={Driveway} />
      <Route exact path={`${props.match.path}/sidewalk`} component={Sidewalk} />
      <Route exact path={`${props.match.path}/back-to-black`} component={BackToBlack} />

    </div>

  );
}

export default connect()(withRouter(Quote));