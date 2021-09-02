import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Step1(props) {

  let dispatch = useDispatch();

  const sendInfo = (property, e) => {
    console.log('checking value of e: ', e.target.value);
    dispatch({
      type: 'UPDATE_CUSTOMER',
      payload:
        { [property]: e.target.value }
    });
  }

  const goForward = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 6, step_number: 1 }
    });
    props.history.push('./sub-service');
  }

  const goBack = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 6, step_number: 0 }
    });
    props.history.push('/')
  }

  return (
    <div>

      <h2>What type of service would you like?</h2>

      <input type="radio" id="snow_removal" name="service" value="Snow Removal" />
      <label htmlFor="snow_removal">Snow Removal</label>
      <input type="radio" id="excavating" name="service" value="Excavating" />
      <label htmlFor="excavating">Excavating</label>

      <br></br>

      <button onClick={goBack}>Go home</button>
      <button onClick={goForward}>Go to sub service</button>
    </div>
  );
}

export default connect()(withRouter(Step1));