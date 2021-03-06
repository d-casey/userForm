import React from 'react'
import { useForm } from 'react-hook-form'
import CheckboxList from '../../components/CheckboxList'
import privacyForm from '../../config/privacyForm'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { submitPrivacyForm } from '../../store/actions'

const Privacy = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const history = useHistory()
  let checkboxData = privacyForm.checkboxData || []

  const onSubmit = data => {
    dispatch(submitPrivacyForm(data))
    history.push('/done')
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CheckboxList checkboxData={checkboxData} register={register} />
        <button data-testid='privacy-form-submit-button' className='right' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Privacy
