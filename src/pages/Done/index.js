import React from 'react'
import { useSelector, useDispatch } from "react-redux"

const Done = () => {
  const formData = useSelector(state => state)
  console.log('Final form data', formData)
  return (
    <div>
      <p>Please verify your email address, you should have received an email from us already!</p>
    </div>
  )
}

export default Done
