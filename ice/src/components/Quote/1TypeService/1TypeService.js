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
      payload: { divisor: 6, step_number: 2 }
    });
    props.history.push('./sub-service');
  }

  const goBack = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 6, step_number: 0 }
    });
    props.history.push('/quote')
  }

  return (
    <div>
      <input
        placeholder='enter first name'
        onChange={(e) => sendInfo('firstName', e)}
      />
      <input
        placeholder='enter last name'
        onChange={(e) => sendInfo('lastName', e)}
      />

      <p>How did you hear about us?</p>
      <select onChange={(e) => sendInfo('howYouHeardOfUs', e)}>
        <option value='Via a friend'>Via a friend</option>
        <option value='Through an ad'>Through an ad</option>
        <option value='Online search'>Online search</option>
        <option value='Other'>Other</option>
      </select>

      <button onClick={goBack}>Go to quote</button>
      <button onClick={goForward}>Go to sub service</button>
    </div>
  );
}

export default connect()(withRouter(Step1));