import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import InputField from '../../components/InputField'
import validationRules from '../../config/validationRules'
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { submitNewUserForm, resetApp } from '../../store/actions'

const User = () => {
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()
  const history = useHistory()
  const userFormState = useSelector(state => state.newUserForm)
  const isFormCompleted = useSelector(state => state.app.formCompleted)

  useEffect(() => {
    if (isFormCompleted) dispatch(resetApp())
  })

  const onSubmit = data => {
    dispatch(submitNewUserForm(data))
    history.push("/privacy")
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          type="text"
          label="Name"
          name="name"
          required
          register={register}
          validation={validationRules.requiredText}
          error={errors.name && errors.name.message}
          defaultValue={userFormState.name}
        />

        <InputField
          type="text"
          label="Role"
          name="role"
          register={register}
          validation={validationRules.optionalText}
          error={errors.role && errors.role.message}
          defaultValue={userFormState.role}
        />

        <InputField
          type="email"
          label="Email"
          name="email"
          required
          register={register}
          validation={validationRules.email}
          error={errors.email && errors.email.message}
          defaultValue={userFormState.email}
        />

        <InputField
          type="password"
          label="Password"
          name="password"
          required
          register={register}
          validation={validationRules.password}
          error={errors.password && errors.password.message}
        />

        <button className="right" type="submit">Next</button>
      </form>
    </div>
  )
}

export default User
