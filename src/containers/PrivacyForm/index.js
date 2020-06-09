import React from 'react'
import { useForm } from "react-hook-form"
import CheckboxList from '../../components/CheckboxList'
import privacyForm from '../../config/privacyForm'
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { updateStage, submitPrivacyForm } from '../../store/actions'

const Privacy = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const history = useHistory()
  let checkboxData = privacyForm.checkboxData || []

  const onSubmit = data => {
    dispatch(submitPrivacyForm(data))
    dispatch(updateStage(2))
    history.push("/done")
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CheckboxList checkboxData={checkboxData} register={register} />
        <button className="right" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Privacy
