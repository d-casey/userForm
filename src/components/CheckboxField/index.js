import React from 'react'
import PropTypes from 'prop-types'
import '../../css/checkboxes.css'

const CheckboxField = ({ name, defaultChecked, message, register, testId }) => {
  return (
    <li className='checkbox'>
      <input
        className='checkbox-input'
        name={name}
        type='checkbox'
        defaultChecked={defaultChecked}
        ref={register()}
        data-testid={testId}
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
