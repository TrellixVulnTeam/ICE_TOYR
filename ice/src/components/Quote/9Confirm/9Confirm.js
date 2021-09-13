import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../../redux/mapStoreToProps';

function Confirm(props) {

  const dispatch = useDispatch();
  const data = props.store.customerInfo;

  const sendInfo = () => {

    let step_number = props.store.quoteProgress.step_number;
    let street_and_apt = data.street;
    if (data.apartment !== '') {
      street_and_apt = data.street + ' Apt. ' + data.apartment;
    }

    let customer = {
      customer: {
        customer_first_name: data.name,
        customer_last_name: "",
        customer_email: data.email,
        customer_category: "5f1a48d11289d5e82e798167",
        customer_address: {
          street: street_and_apt,
          city: data.city,
          state: data.state,
          zip_code: data.zipcode,
        },
        custom_fields: [
          {
            label: 'Back to Black',
            value: data.back_to_black
          },
          {
            label: 'Driveway',
            value: data.driveway
          },
          {
            label: 'Location to Shovel',
            value: data.sidewalk
          },
          {
            label: 'Service',
            value: data.service
          },
          {
            label: 'Sub Service',
            value: data.subServices
          },
        ],
      },
    };

    console.log('checking customer object', customer);
    // dispatch({
    //   type: 'ADD_CUSTOMER',
    //   payload: customer
    // });
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 9, step_number: step_number + 1 }
    });
    dispatch({
      type: 'UPDATE_CUSTOMER',
      payload: {
        apartment: "",
        back_to_black: "",
        city: "",
        driveway: "",
        email: "",
        name: "",
        service: "",
        sidewalk: "",
        state: "",
        street: "",
        subServices: "",
        zipcode: "",
      }
    });
    props.history.push('./thank-you');
  };

  return (
    <div className='quoteStep_container'>

      <h2 className='quoteStep_container_title'>Does this look right to you?</h2>
      <div className='quote_confirm_container'>
        <h3>Name and Address</h3>
        <div className='quote_confirm_item_container'>
          <p>Name: <span>{data.name}</span></p>
          <p>Street: <span>{data.street}</span></p>
          <p>Apartment: <span>{data.apartment === undefined ? 'Not applicable' : data.apartment}</span></p>
          <p>City: <span>{data.city}</span></p>
          <p>State: <span>{data.state}</span></p>
          <p>Zipcode: <span>{data.zipcode}</span></p>
        </div>
        <h3>Services you requested</h3>
        <div className='quote_confirm_item_container'>
          <p>Type service: <span>{data.service}</span></p>
          {data.service === "Excavating" ? '' : <>
            <p>Type of driveway: <span>{data.driveway}</span></p>
            <p>Number of locations to shovel to: <span>{data.sidewalk}</span></p>
            <p>Back to Black service: <span>{data.back_to_black}</span></p>
          </>}
        </div>
      </div>
      <div className='quoteStep_nextBtn_container'>
        <button className='btn primary_btn' onClick={sendInfo}>This looks correct!</button>
      </div>
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(Confirm));