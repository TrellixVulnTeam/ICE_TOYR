
// Info on creating custom components
// https://sohnya.hashnode.dev/how-to-build-custom-component-button-in-react
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

function SecondaryBtn(props) {

  let clkinpt;
  let check = typeof props.click === 'string';
  console.log('check', check);

  if (check) {
    clkinpt = () => props.history.push(props.click);
  } else {
    clkinpt = props.click;
  }


  return <button className='btn secondary_btn' type="submit" onClick={clkinpt}>{props.title}</button>;
}

export default connect(mapStoreToProps)(withRouter(SecondaryBtn));
