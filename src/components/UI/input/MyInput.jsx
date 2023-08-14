import React from "react";

function MyInput({ ...props }) {

  return (
    <input {...props} className={props.className ? `input ${props.className}` : `input`} />
  )
}

export default MyInput;