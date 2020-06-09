import React from 'react'
import PropTypes from 'prop-types'

const InputField = ({ type, label, name, required, register, validation, error, defaultValue }) => {
  return (
    <fieldset className="full-width">
      <legend>
        {label}: {required ? '*' : ''} <span className="error">{error}</span>
      </legend>
      <input type={type} name={name} ref={register(validation)} defaultValue={defaultValue} />
    </fieldset>
  )
}

InputField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  register: PropTypes.func.isRequired,
  validation: PropTypes.object,
  error: PropTypes.string,
  defaultValue: PropTypes.string
}

export default InputField
