import React from 'react'
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

const ProgressBar = () => {
  const stages = ['User', 'Privacy', 'Done']
  const appStage = useSelector(state => state.app.stage)

  const listItems = stages.map((stage, index) =>
    <li key={stage} className={(index === appStage) ? 'progress-bar-flex-item active-item' : 'progress-bar-flex-item'}>{stage}</li>
  )

  return (
    <div className="progress-bar">
      <ul className="progress-bar-flex-container">
        {listItems}
      </ul>
    </div>
  )
}

export default ProgressBar
