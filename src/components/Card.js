import React from 'react';

const Card = (props) => {
  return (
    <div className='card'>
      <p className='name'>{props.name}</p>
      <p className='description'>{props.description}</p>
      <a href={props.link} className='link'>
        Demo
      </a>
    </div>
  );
};

export default Card;
