import React from "react";
import './MyButton.css';

function MyButton({ children, ...props}) {

  return (
    <button {...props} className={props.className ? `button ${props.className}` : `button`}>
      {children}
    </button>
  )
}

export default MyButton;