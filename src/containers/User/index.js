import React from 'react'
import { useForm } from "react-hook-form"

const User = ({ type, name, required, ref }) => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>

        <fieldset className="full-width">
          <legend>
            Name * <span>{errors.name && errors.name.message}</span>
          </legend>
          <input type="text" name="name" ref={register({required: "Required"})} />
        </fieldset>

        <fieldset className="full-width">
          <legend>
            Role
          </legend>
          <input type="text" name="role" ref={register({required: false})} />
        </fieldset>

        <fieldset className="full-width">
          <legend>
            Email * <span>{errors.email && errors.email.message && errors.email.message}</span>
          </legend>
          <input type="email" name="email" ref={register({required: "Required", pattern: { value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "Invalid email address"}})} />
        </fieldset>

        <fieldset className="full-width">
          <legend>
            Password * <span>{errors.password && errors.password.message && errors.password.message}</span>
          </legend>
          <input type="Password" name="password" ref={register({required: "Required", min: 10, pattern: { value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{10,}$/, message: "Incorrect password format. Please see our password guide next to the form."}})} />
        </fieldset>

        <button className="right" type="submit">Next</button>
      </form>
    </div>
  )
}

export default User
