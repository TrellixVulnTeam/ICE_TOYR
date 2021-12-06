import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import mapStoreToProps from '../../redux/mapStoreToProps';

function ProgressBar(props) {

  const [widthPercent, setWidthPercent] = useState(0);

  useEffect(() => {
    const calculatePercent = () => {

      // Number to divide by,
      // the dividend
      let dividend = 100;

      // Number dividing,
      // the divisor
      let divisor = props.store.quoteProgress.divisor;

      // Resulting number,
      // the quotient
      let quotient = dividend / divisor;

      // The step number currently loaded
      let step_number = props.store.quoteProgress.step_number;

      // Progress of user in form
      setWidthPercent(quotient * step_number);
    };

    calculatePercent();
  }, [props.store.quoteProgress]);



  return (
    <div className='progressBar'>
      <div className='progressBar_container'>
        <div className='progressBar_display' style={{ width: `${widthPercent}%` }}></div>
      </div>
    </div>
  );
}
export default connect(mapStoreToProps)(withRouter(ProgressBar));