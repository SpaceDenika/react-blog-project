import React from "react";

function MyButton({ children, ...props}) {

  return (
    <button {...props} className={props.className ? `${props.className} button` : `button`}>
      {children}
    </button>
  )
}

export default MyButton;