
// Info on creating custom components
// https://sohnya.hashnode.dev/how-to-build-custom-component-button-in-react

function NextButton(props) {
  return <button className='btn primary_btn' type="submit" onClick={props.click}>Next</button>;
}

export default NextButton;