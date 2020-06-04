import React from 'react'
import { useForm } from "react-hook-form"

const Privacy = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className="full-width">

          <li className="checkbox">
            <input
              className="checkbox-input"
              name="receive_updates"
              type="checkbox"
              ref={register()}
              defaultChecked={true}
            />
            <span>Receive Updates about Tray.io products by email</span>
          </li>

          <li className="checkbox">
            <input
              className="checkbox-input"
              name="receive_communication"
              type="checkbox"
              ref={register()}
            />
            <span>Receive communication by email for other products created by the Tray.io team Receive communication by email for other products created by the Tray.io team Receive communication by email for other products created by the Tray.io team</span>
          </li>
        </ul>
        <button className="right" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Privacy
