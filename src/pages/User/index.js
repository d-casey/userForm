import React from 'react'
import { useForm } from "react-hook-form"
import InputField from '../../components/InputField'
import validationRules from '../../config/validationRules'
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import {
  UPDATE_STAGE,
  RESET_USER_FORM,
  SUBMIT_NEW_USER_FORM
} from '../../constants/actions'

const User = ({ type, name, required, ref }) => {
  const { register, handleSubmit, watch, errors } = useForm()
  const dispatch = useDispatch()
  const history = useHistory()
  const userFormState = useSelector(state => state.newUserForm)
  const appStage = useSelector(state => state.app.stage)

  if (appStage > 1) {
    dispatch({ type: UPDATE_STAGE, payload: { stage: 0 } })
  }

  const onSubmit = data => {
    dispatch({ type: SUBMIT_NEW_USER_FORM, payload: data })//just dispatch the action creator functions here
    dispatch({ type: UPDATE_STAGE, payload: { stage: 1 } })
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
          validation={validationRules.requiredField}
          error={errors.name && errors.name.message}
          defaultValue={userFormState.name}
        />

        <InputField
          type="text"
          label="Role"
          name="role"
          register={register}
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
