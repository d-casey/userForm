import React from 'react'
import { useForm } from "react-hook-form"
import CheckboxList from '../../components/CheckboxList'
import privacyForm from '../../config/privacyForm'
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { updateStage, submitPrivacyForm } from '../../store/actions'

const Privacy = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  let dispatch = useDispatch()
  let history = useHistory()

  const onSubmit = data => {
    dispatch(submitPrivacyForm(data))//import the action creators here instead
    dispatch(updateStage(2))
    history.push("/done")
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CheckboxList checkboxData={privacyForm.checkboxData} register={register} />
        <button className="right" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Privacy