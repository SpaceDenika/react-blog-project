import React from "react";

function MySelect({ className, options, defaultValue, value, onChange }) {

  return (
    <select 
      value={value} 
      onChange={e => onChange(e.target.value)} 
      name="sort" 
      className={className ? `select ${className}` : `select`}
    >
      <option disabled value="">{defaultValue}</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.name}</option>
      ))}
    </select>
  )
}

export default MySelect;