import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import {
  RESET_USER_FORM,
  RESET_PRIVACY_FORM
} from '../../constants/actions'
// import resetUserForm from '../../actions'

const Done = () => {
  const dispatch = useDispatch()
  const newUserFormData = useSelector(state => state.newUserForm)
  const privacyFormData = useSelector(state => state.privacyForm)
  const finalFormData = { newUserFormData, privacyFormData }

  //only log this once, global state variable for submitted and check that before doing the below steps
  console.log('Final form data', finalFormData)
  dispatch({ type: RESET_USER_FORM })
  dispatch({ type: RESET_PRIVACY_FORM })


  return (
    <div>
      <p>Please verify your email address, you should have received an email from us already!</p>
    </div>
  )
}

export default Done
