import React, { Component, Fragment } from 'react'
import CheckboxField from '../../components/CheckboxField'

export class User extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <form>
          <ul className="full-width">
            <CheckboxField name="receive_updates" checked message="Receive Updates about Tray.io products by email" />
            <CheckboxField name="receive_communication" message="Receive communication by email for other products created by the Tray.io team Receive communication by email for other products created by the Tray.io team Receive communication by email for other products created by the Tray.io team" />
          </ul>
          <button className="right" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default User
