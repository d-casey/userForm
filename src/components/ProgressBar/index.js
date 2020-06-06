import React from 'react'
import { useSelector } from "react-redux"
import progressBarStages from '../../config/progressBar'

const ProgressBar = () => {
  const stages = progressBarStages
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
