import React from 'react';

const About = (props) => {
  return (
    <div className={`mb-3 mt-3 bg-${props.mode}`}>
      <h1 className='m-3' style={{color: props.TextMode==='dark'?'black':'white'}}>About Us</h1>
      <h3 className='m-3' style={{color: props.TextMode==='dark'?'black':'white'}}>This is a text utility website made with ReactJS developed by Kumar Gagandeo 
        . I am currenty learning FrontEnd with ReactJS </h3>
    </div>
  );
}

export default About;
