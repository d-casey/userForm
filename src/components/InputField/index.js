import React from 'react'

const InputField = ({ type, label, name, required, register, validation, error }) => {
  return (
    <fieldset className="full-width">
      <legend>
        {label}: {required ? '*' : ''} <span className="error">{error}</span>
      </legend>
      <input type={type} name={name} ref={register(validation)} />
    </fieldset>
  )
}

export default InputField
