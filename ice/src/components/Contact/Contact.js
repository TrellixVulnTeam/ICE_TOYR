import React, { useEffect } from 'react';


function Contact() {

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);
  return (
    <div className='contact'>
      In Contact
    </div>
  );
}
export default Contact;