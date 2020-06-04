import React from 'react'

const CheckboxField = ({ name, checked, message }) => {
  return (
      <li className="checkbox">
        <input
          className="checkbox-input"
          name={name}
          type="checkbox"
          checked={checked}
        />
        <span>{message}</span>
      </li>
  )
}

export default CheckboxField
