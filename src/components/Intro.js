import React from 'react';

const Intro = () => {
  return (
    <div className='intro'>
      <p className='intro--main'>Hello, call me Ram.</p>
      <div className='intro--subtitle'>
        <p>I crunch numbers for my day job,</p>
        <p>
          <span>but like to dabble in </span>
          <span className='intro--highlight' id='highlight'>
            web development
          </span>
          <span>.</span>
        </p>
      </div>
    </div>
  );
};

export default Intro;
