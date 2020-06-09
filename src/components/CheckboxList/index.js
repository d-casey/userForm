import React from 'react'
import CheckboxField from '../CheckboxField'
import PropTypes from 'prop-types'

const CheckboxList = ({ checkboxData, register }) => {
  const checkboxFields = checkboxData.map((checkbox) =>
    <CheckboxField register={register} key={checkbox.name} name={checkbox.name} defaultChecked={checkbox.defaultChecked} message={checkbox.message} />
  )

  return (
    <ul className="full-width">
      {checkboxFields}
    </ul>
  )
}

CheckboxField.propTypes = {
  checkboxData: PropTypes.array,
  register: PropTypes.func.isRequired
}


export default CheckboxList
