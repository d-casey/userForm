import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import '../../css/sidebar.css'
/*
  The next step for this component is to add each stages content to config->stageConfig. That way updating one file can be easy to add new
  progress bar items and sidebar content.
*/
const Sidebar = ({ appStage }) => {
  const userFormContent = () => {
    return (
      <Fragment>
        <h3>Sign Up Form</h3>
        <p>Required fiels are marked with an *</p>
        <p>Passwords must be:</p>
        <ul>
          <li>At least 10 characters long</li>
          <li>Contain at least one number</li>
          <li>Contain at least one upper case letter</li>
          <li>Contain at least one lower case letter</li>
        </ul>
      </Fragment>
    )
  }

  const privacyFormContent = () => {
    return (
      <Fragment>
        <h3>Privacy</h3>
        <p>Please let us know how you would like us to contact you.</p>
      </Fragment>
    )
  }

  const done = () => {
    return (
      <Fragment>
        <h3>Done!</h3>
      </Fragment>
    )
  }

  return (
    <div className="sidebar">
      { appStage === 0 && userFormContent() }
      { appStage === 1 && privacyFormContent() }
      { appStage === 2 && done() }
    </div>
  )
}

Sidebar.propTypes = {
  appStage: PropTypes.number
}

export default Sidebar
