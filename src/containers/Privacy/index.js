import React from 'react'
import { useForm } from "react-hook-form"
import CheckboxList from '../../components/CheckboxList'
import privacyForm from '../../config/privacyForm'
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import {
  SUBMIT_PRIVACY_FORM
} from '../../constants/actions'

const Privacy = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const myState = useSelector(state => state)
  let dispatch = useDispatch()
  let history = useHistory()
  const onSubmit = data => {
    console.log('PRIVACYSTATEDATA: ', data)
    dispatch({ type: SUBMIT_PRIVACY_FORM, payload: data })
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
