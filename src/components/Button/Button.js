import React from 'react';
import './Button.css';

const Button = ({ color, text }) => {
  return (
    <>
      <button className={`button ${color}-button`}>
        {text}
      </button>
    </>
  );
};

export default Button;
