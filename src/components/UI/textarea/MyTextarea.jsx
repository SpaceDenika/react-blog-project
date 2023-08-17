import React from "react";

function MyTextarea({ ...props }) {

  return (
    <textarea {...props} className={props.className ? `textarea ${props.className}` : `textarea`} />  
  )
}

export default MyTextarea;