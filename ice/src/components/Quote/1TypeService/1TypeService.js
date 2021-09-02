import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';


function TypeService(props) {

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
      payload: { divisor: 7, step_number: 2 }
    });
    props.history.push('./sub-service');
  }

  const goBack = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 7, step_number: 1 }
    });
    props.history.push('./name-email')
  }

  return (
    <div>

      <h2>What type of service would you like?</h2>
      <form>
        <input required type="radio" id="snow_removal" name="service" value="Snow Removal" />
        <label htmlFor="snow_removal">Snow Removal</label>
        <input required type="radio" id="excavating" name="service" value="Excavating" />
        <label htmlFor="excavating">Excavating</label>
        <button onClick={goBack}>Go home</button>
        <input type="submit" />
      </form>

      <br></br>

      <Formik
        initialValues={{
          picked: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form>
            <div id="my-radio-group">Picked</div>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="picked" value="One" />
                One
              </label>
              <label>
                <Field type="radio" name="picked" value="Two" />
                Two
              </label>
              <div>Picked: {values.picked}</div>
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

      <br></br>


    </div>
  );
}

export default connect()(withRouter(TypeService));