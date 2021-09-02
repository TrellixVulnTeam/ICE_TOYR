import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Step4(props) {

  let dispatch = useDispatch();

  const goForward = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 6, step_number: 4 }
    });
    props.history.push('./sidewalk');
  }

  const goBack = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 6, step_number: 2 }
    });
    props.history.push('./location');
  }

  return (
    <div className='quote'>

      <h2>What type of driveway do you have?</h2>

      <input type="radio" id="single_car" name="driveway" value="Single Car" />
      <label htmlFor="single_car">Single Car</label>
      <input type="radio" id="double_car" name="driveway" value="Double Car" />
      <label htmlFor="double_car">Double Car</label>
      <input type="radio" id="triple_car" name="driveway" value="Triple Car" />
      <label htmlFor="triple_car">Triple Car</label>
      <input type="radio" id="different_driveway" name="driveway" value="My driveway is different" />
      <label htmlFor="different_driveway">My driveway is different</label>

      <br></br>
      <button onClick={goBack}>Go to location</button>
      <button onClick={goForward}>Go to sidewalk</button>

    </div>
  );
}

export default connect()(withRouter(Step4));