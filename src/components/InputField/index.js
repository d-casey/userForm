import React from 'react'
import PropTypes from 'prop-types'
import '../../css/input.css'

const InputField = ({ type, label, name, required, register, validation, error, defaultValue, testId }) => {
  return (
    <fieldset className="full-width-imput">
      <legend>
        {label}: {required ? '*' : ''} <span className="error">{error}</span>
      </legend>
      <input type={type} name={name} ref={register(validation)} defaultValue={defaultValue} data-testid={testId} />
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
