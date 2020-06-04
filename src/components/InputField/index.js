import React from 'react'

const InputField = ({ type, name, required, errorMsg, value }) => {
  return (
    <fieldset className="full-width">
      <legend>
        {name}: {required ? '*' : ''} <span> {errorMsg}</span>
      </legend>
      <input
        name={name}
        required={required}
        value={value}
        type={type}
      />
    </fieldset>
  )
}

export default InputField
