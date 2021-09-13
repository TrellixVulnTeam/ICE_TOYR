import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import logo from '../../a_assets/images/ICE_official_logo.png';
import mapStoreToProps from '../../redux/mapStoreToProps';

function Footer(props) {

  let dispatch = useDispatch();

  const goForward = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 9, step_number: 0 }
    });
    props.history.push('./quote/name');
  }

  return (
    <div className='footer'>
      <div className='footer__b780'>
        <div className='footer__b__b759'>
          <img className='footer__b__b__b700' src={logo} alt='logo of ICE' />
        </div>
      </div>
      <div className='footer__b538'>
        <div className='footer__b__b340'>
          <p>289 Windsor Lane<br /> New Brighton MN<br /> 55112</p>
          <p className='footer__b__b__b256'>(612) 743-8351</p>
        </div>
        <div className='footer__b__b160'>
          <button
            className="footer__b__b--i413 btn primary_btn"
            onClick={goForward}
          >Get a Quote</button>
        </div>
      </div>
      <div className='footer__b798'>
        <p className='footer__b__b874'>Copyright © 2021. All rights reserved.</p>
        <p className='footer__b__b874'>Designed by AB.UXD. Developed by Justus Witmer.</p>
      </div>
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(Footer));
