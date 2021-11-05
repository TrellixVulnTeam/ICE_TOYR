
// Info on creating custom components
// https://sohnya.hashnode.dev/how-to-build-custom-component-button-in-react
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

function RegBtn(props) {
  return <button className='btn primary_btn' type="submit" onClick={() => props.history.push(props.click)}>{props.title}</button>;
}

export default connect(mapStoreToProps)(withRouter(RegBtn));
