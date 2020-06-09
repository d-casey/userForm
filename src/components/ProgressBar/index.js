import React from 'react'
import stageConfig from '../../config/stageConfig'
import PropTypes from 'prop-types'
import progressBar from '../../css/progressBar.css'

const ProgressBar = ({ appStage }) => {
  const stages = stageConfig.progressBarStages

  const listItems = stages.map((stage, index) =>
    <li key={stage} className={(index === appStage) ? 'progress-bar-flex-item active-item' : 'progress-bar-flex-item'}>
      {stage}
    </li>
  )

  return (
    <div className="progress-bar">
      <ul className="progress-bar-flex-container">
        {listItems}
      </ul>
    </div>
  )
}

ProgressBar.propTypes = {
  appStage: PropTypes.number
}

export default ProgressBar
