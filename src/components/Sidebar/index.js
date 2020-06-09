import React from 'react'

const Sidebar = ({ appStage }) => {
  return (
    <div className="sidebar">
      <h3>Sign Up Form</h3>
      <p>Required fiels are marked with an *</p>
      <p>Passwords must be:</p>
      <ul>
        <li>At least 10 characters long</li>
        <li>Contain at least one number</li>
        <li>Contain at least one upper case letter</li>
        <li>Contain at least one lower case letter</li>
      </ul>
    </div>
  )
}

export default Sidebar
