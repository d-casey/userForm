import React from 'react'
import CheckboxField from '../CheckboxField'

const CheckboxList = ({ checkboxData }) => {
  const checkboxFields = checkboxData.map((checkbox) =>
    <CheckboxField key={checkbox.name} name={checkbox.name} defaultChecked={checkbox.defaultChecked} message={checkbox.message} />
  )

  return (
    <ul className="full-width">
      {checkboxFields}
    </ul>
  )
}

export default CheckboxList
