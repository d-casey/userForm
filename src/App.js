import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import RoutedContainer from './components/RoutedContainer'
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
          <RoutedContainer />
        </div>
      </div>

    </div>
  )
}

export default App;
