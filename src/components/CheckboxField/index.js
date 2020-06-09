import React from 'react'
import PropTypes from 'prop-types'
import checkboxes from '../../css/checkboxes.css'

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

CheckboxField.propTypes = {
  name: PropTypes.string,
  defaultChecked: PropTypes.bool,
  message: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired
}

export default CheckboxField
