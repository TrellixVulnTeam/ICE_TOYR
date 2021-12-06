import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Header(props) {

  const [header, setHeader] = useState(false);
  let dispatch = useDispatch();

  const changeHeader = () => {
    window.scrollY >= 70 ? setHeader(true) : setHeader(false);
  }

  window.addEventListener('scroll', changeHeader);

  const sendInfo = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 9, step_number: 0 }
    });
    props.history.push('/quote/type-of-service');
  };

  return (
    <div className={header ? 'header active' : 'header'}>
      <div className='header__b567' onClick={() => props.history.push('/')}>
        <div className='header__b__b269'>
          <h2 className='header__b__b--i681'>ICE</h2>
        </div>
        <div className='header__b__b431'>
          <p className='header__b__b--i633'>Iserman</p>
          <p className='header__b__b--i633'>Contracting & Excavating</p>
        </div>
      </div>
      <div className='header__b284'>
        <p onClick={() => props.history.push('/services')}>Services</p>
        <p onClick={sendInfo}>Get a Quote</p>
        {/* <p onClick={() => props.history.push('/login')}>Log in</p> */}
      </div>
    </div>
  );
}

export default connect()(withRouter(Header));
