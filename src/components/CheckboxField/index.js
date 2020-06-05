import React from 'react'

const CheckboxField = ({ name, defaultChecked, message, register }) => {
  return (
    <li className="checkbox">
      <input
        className="checkbox-input"
        name={name}
        type="checkbox"
        defaultChecked={defaultChecked}
        ref={register()}
      />
      <span>{message}</span>
    </li>
  )
}

export default CheckboxField
