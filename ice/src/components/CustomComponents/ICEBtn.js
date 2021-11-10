
// Info on creating custom components
// https://sohnya.hashnode.dev/how-to-build-custom-component-button-in-react
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Property | option 1, option 2, etc.
// --------------------------------- //
// style | 'Primary', 'Secondary'
// click | String, Function
// title | 'Text the user will see on the button'

function ICEBtn(props) {

  let clkinpt;
  let check = typeof props.click === 'string';

  if (check) {
    clkinpt = () => props.history.push(props.click);
  } else {
    clkinpt = props.click;
  }

  let btnStyle = '';
  if ((props.btnStyle === 'Primary') || (props.btnStyle === undefined)) {
    btnStyle = 'primary_btn';
  } else {
    btnStyle = 'secondary_btn';
  }


  return <button className={'btn ' + btnStyle} type="submit" onClick={clkinpt}>{props.title}</button>;
}

export default connect(mapStoreToProps)(withRouter(ICEBtn));
