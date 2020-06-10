import React from 'react'
import Sidebar from '../../components/Sidebar'
import FormSwitcher from '../../components/FormSwitcher'
import ProgressBar from '../../components/ProgressBar'
import { useSelector } from 'react-redux'
import '../../css/mainContainer.css'

const Main = () => {
  const appStage = useSelector(state => state.app.stage)

  return (
    <div className='main-container'>
      <ProgressBar appStage={appStage} />
      <div className='wrapper'>
        <Sidebar appStage={appStage} />
        <FormSwitcher />
      </div>
    </div>
  )
}

export default Main
