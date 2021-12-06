import ArrowBackIcon from '@material-ui/icons/ArrowBack';


function BackButton(props) {
  return <button className='backButton' onClick={props.click}><span className='backButton_arrow'><ArrowBackIcon /></span>Back</button>;
}

export default BackButton;