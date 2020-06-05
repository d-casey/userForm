import React from 'react'
import { useForm } from "react-hook-form"
import CheckboxList from '../../components/CheckboxList'
import privacyForm from '../../config/privacyForm'

const Privacy = () => {
  const { register, handleSubmit, watch, errors } = useForm()
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
