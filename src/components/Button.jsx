import React from 'react';
import './button.css';

const Button = ({ onClick, style, children }) => {
  return (
    <button className="button" style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
