import React from 'react'

const CheckboxField = ({ name, defaultChecked, message }) => {
  return (
    <li className="checkbox">
      <input
        className="checkbox-input"
        name={name}
        type="checkbox"
        defaultChecked={defaultChecked}
      />
      <span>{message}</span>
    </li>
  )
}

export default CheckboxField
