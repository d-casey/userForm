import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { logSubmittedFormDetails } from '../../store/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Done = () => {
  const dispatch = useDispatch()
  const isFormCompleted = useSelector(state => state.app.formCompleted)
  const newUserFormData = useSelector(state => state.newUserForm)
  const privacyFormData = useSelector(state => state.privacyForm)
  const finalFormData = { newUserFormData, privacyFormData }

  useEffect(() => {
    if(!isFormCompleted) dispatch(logSubmittedFormDetails(finalFormData))
  })

  return (
    <div className="success">
      <FontAwesomeIcon className="fa-5x" icon="check" />
      <p>Please verify your email address, you should have received an email from us already!</p>
    </div>
  )
}

export default Done
