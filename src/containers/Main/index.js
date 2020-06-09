import React from 'react'
import Sidebar from '../../components/Sidebar'
import Router from '../../components/Router'
import ProgressBar from '../../components/ProgressBar'
import { useSelector } from "react-redux"
import mainContainer from '../../css/mainContainer.css'

function App() {
  const appStage = useSelector(state => state.app.stage)

  return (
    <div className="main-container">
      <ProgressBar appStage={appStage} />
      <div className="wrapper">
        <Sidebar appStage={appStage} />
        <Router />
      </div>
    </div>
  )
}

export default App
