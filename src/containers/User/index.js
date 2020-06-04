import React, { Component, Fragment } from 'react'
import InputField from '../../components/InputField'

export class User extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="form">
        <form>
          <InputField type="text" name="Name" required errorMsg={null} value={null} />
          <InputField type="text" name="Role" errorMsg="" value={null} />
          <InputField type="email" name="Email" required errorMsg={null} value={null} />
          <InputField type="Password" name="Password" required errorMsg={null} />
          <button className="right" type="submit">Next</button>
        </form>
      </div>
    )
  }
}

export default User
