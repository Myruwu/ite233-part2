import React from 'react';
import './TextField.css';

const TextField = ({ variant }) => {
  return <input className={`textfield ${variant}-textfield`} />;
};

export default TextField;
