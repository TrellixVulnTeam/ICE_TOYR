import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../../redux/mapStoreToProps';

function SubType(props) {

  let dispatch = useDispatch();

  const goForward = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 7, step_number: 2 }
    });
    props.history.push('./location');
  }

  const goBack = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 7, step_number: 0 }
    });
    props.history.push('./type-of-service');
  }

  return (
    <div className='quote'>

      <h2>Is this for residential or commercial?</h2>

      <input type="radio" id="residential" name="sub_service" value="Residential" />
      <label htmlFor="residential">Residential</label>
      <input type="radio" id="commercial" name="sub_service" value="Commercial" />
      <label htmlFor="commercial">Commercial</label>

      <br></br>
      <button onClick={goBack}>Go to type of service</button>
      <button onClick={goForward}>Go to location</button>

      <p>Hi, {props.store.customerInfo.firstName} {props.store.customerInfo.lastName}!</p>


    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(SubType));