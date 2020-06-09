import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { resetUserForm, resetPrivacyForm } from '../../store/actions'

const Done = () => {
  const dispatch = useDispatch()
  const newUserFormData = useSelector(state => state.newUserForm)
  const privacyFormData = useSelector(state => state.privacyForm)
  const finalFormData = { newUserFormData, privacyFormData }

  //async these three/combine them in a thunk dispatch
  console.log('Final form data', finalFormData)
  dispatch(resetUserForm())
  dispatch(resetPrivacyForm())


  return (
    <div>
      <p>Please verify your email address, you should have received an email from us already!</p>
    </div>
  )
}

export default Done
