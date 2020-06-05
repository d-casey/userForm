import React from 'react'
import { useLocation } from "react-router-dom";

const ProgressBar = () => {
  const location = useLocation()
  console.log('location:', location.pathname)



  return (
    <div className="progress-bar">
      <ul className="progress-bar-flex-container">
        <li className={(location.pathname === '/') ? 'progress-bar-flex-item active-item' : 'progress-bar-flex-item'}>User</li>
        <li className={(location.pathname === '/privacy') ? 'progress-bar-flex-item active-item' : 'progress-bar-flex-item'}>Privacy</li>
        <li className={(location.pathname === '/done') ? 'progress-bar-flex-item active-item' : 'progress-bar-flex-item'}>Done</li>
      </ul>
    </div>
  )
}

export default ProgressBar
