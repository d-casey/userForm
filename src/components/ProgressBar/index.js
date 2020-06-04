import React, { Component } from 'react'

export class ProgressBar extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="progress-bar">
        <ul className="progress-bar-flex-container">
          <li className="progress-bar-flex-item active-item">User</li>
          <li className="progress-bar-flex-item">Privacy</li>
          <li className="progress-bar-flex-item">Done</li>
        </ul>
      </div>
    )
  }
}

export default ProgressBar
