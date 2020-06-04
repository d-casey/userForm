import React from 'react'

const InputField = ({ type, label, required, ref }) => {
  return (
    <fieldset className="full-width">
      <legend>
        {label}: {required ? '*' : ''}
      </legend>
      <input
        ref={ref}
        name={label}
        type={type}
      />
    </fieldset>
  )
}

export default InputField
