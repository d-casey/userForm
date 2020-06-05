import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Router from './components/Router'
import ProgressBar from './components/ProgressBar'
import './App.css'


function App() {

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <ProgressBar />
        <div className="wrapper">
          <Sidebar />
          <Router />
        </div>
      </div>

    </div>
  )
}

export default App;
