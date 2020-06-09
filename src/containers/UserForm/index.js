import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import InputField from '../../components/InputField'
import validationRules from '../../config/validationRules'
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { updateStage, resetFormStage, submitNewUserForm } from '../../store/actions'

const User = ({ type, name, required, ref }) => {
  const { register, handleSubmit, watch, errors } = useForm()
  const dispatch = useDispatch()
  const history = useHistory()
  const userFormState = useSelector(state => state.newUserForm)
  const appStage = useSelector(state => state.app.stage)

  useEffect(() => {
    if (appStage > 1) dispatch(resetFormStage())//dispatch an action to reset everything, including the global submitted state
  })

  const onSubmit = data => {
    dispatch(submitNewUserForm(data))
    dispatch(updateStage(1))//have the submit new user form dispatch update stage using thunk
    history.push("/privacy")//also have a thunk function wrapper around these?
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
