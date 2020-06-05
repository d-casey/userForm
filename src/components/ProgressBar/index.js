import React from 'react'

const ProgressBar = ({ type, label, name, required, register, validation, error }) => {
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

export default ProgressBar
