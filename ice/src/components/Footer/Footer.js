import { connect, useDispatch } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import location from '../../a_assets/images/location.png';
import truck from '../../a_assets/images/truck.png';
import mapStoreToProps from '../../redux/mapStoreToProps';

function Footer(props) {

  let dispatch = useDispatch();

  const goForward = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 6, step_number: 0 }
    });
    props.history.push('./quote/type-of-service');
  }

  return (
    <div className='footer'>
      <div className='footer__b780'>
        <div className='footer__b__b759'>
          <h2 className='footer__b__b__b700'><Link to="/">ICE</Link></h2>
        </div>
        <div className='footer__b__b892'>
          <p className='footer__b__b__b397'>Iserman</p>
          <p className='footer__b__b__b397'>Contracting & Excavating</p>
        </div>
      </div>
      <div className='footer__b538'>
        <div className='footer__b__b141'>
          <img src={location} alt="location of ICE" />
        </div>
        <div className='footer__b__b340'>
          <p>289 Windsor Lane<br /> New Brighton MN<br /> 55112</p>
          <p className='footer__b__b__b256'>(612) 743-8351</p>
        </div>
        <div className='footer__b__b160'>
          <button
            className="footer__b__b--i413 btn primary_btn"
            onClick={goForward}
          >Get a Quote</button>
          <div className='footer__b__b187'>
            <img src={truck} alt='truck' />
          </div>
        </div>
      </div>
      {/* <div className='footer__b803'>

      </div> */}
      <div className='footer__b798'>
        <p className='footer__b__b874'>Copyright © 2021. All rights reserved.</p>
        <p className='footer__b__b874'>Designed by AB.UXD. Developed by Justus Witmer.</p>
      </div>
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(Footer));
