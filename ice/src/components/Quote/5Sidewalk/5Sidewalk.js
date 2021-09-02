import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Step5(props) {

  let dispatch = useDispatch();

  const goForward = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 6, step_number: 5 }
    });
    props.history.push('./back-to-black');
  }

  const goBack = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 6, step_number: 3 }
    });
    props.history.push('./driveway');
  }

  return (
    <div className='quote'>

      <h2>Would you like us to shovel and salt any sidewalks?</h2>
      <p>We charge for the amount of doors or locations we shovel to.
        Examples: front door, back door, garbage cans, city sidewalk, etc.</p>

      <input type="radio" id="single_sidewalk" name="sidewalk" value="Single Sidewalk" />
      <label htmlFor="single_sidewalk">Single Sidewalk</label>
      <input type="radio" id="double_sidewalk" name="sidewalk" value="Double Sidewalk" />
      <label htmlFor="double_sidewalk">Double Sidewalk</label>
      <input type="radio" id="triple_sidewalk" name="sidewalk" value="Triple Sidewalk" />
      <label htmlFor="triple_sidewalk">Triple Sidewalk</label>
      <input type="radio" id="none" name="sidewalk" value="None" />
      <label htmlFor="none">None</label>

      <br></br>
      <button onClick={goBack}>Go to driveway</button>
      <button onClick={goForward}>Go to Back to Black</button>

    </div>
  );
}

export default connect()(withRouter(Step5));