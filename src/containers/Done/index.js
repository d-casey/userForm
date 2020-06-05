import React from 'react'
import { useSelector, useDispatch } from "react-redux"

const Done = () => {
  const myState = useSelector(state => state)
  console.log('DONE PAGE STATE', myState)
  return (
    <div>
      <p>Please verify your email address, you should have received an email from us already!</p>
    </div>
  )
}

export default Done
