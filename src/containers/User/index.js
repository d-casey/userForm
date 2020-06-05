import React from 'react'
import { useForm } from "react-hook-form"
import InputField from '../../components/InputField'
import validationRules from '../../config/validationRules'

const User = ({ type, name, required, ref }) => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => {
    console.log(data)
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
        />

        <InputField
          type="text"
          label="Role"
          name="role"
          register={register}
        />

        <InputField
          type="email"
          label="Email"
          name="email"
          required
          register={register}
          validation={validationRules.email}
          error={errors.email && errors.email.message}
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
