import React from 'react'
import { useForm } from "react-hook-form"
import CheckboxList from '../../components/CheckboxList'
import privacyForm from '../../config/privacyForm'
import { useSelector, useDispatch } from "react-redux"

const Privacy = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const myState = useSelector(state => state)
  console.log('PRIVACY STATE: ', myState)
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CheckboxList checkboxData={privacyForm.checkboxData} />
        <button className="right" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Privacy
