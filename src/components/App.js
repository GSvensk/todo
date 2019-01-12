import React, { Component } from 'react'
import Header from '../containers/Header'
import MainSection from '../containers/MainSection'
import CronTasks from '../containers/CronTasks'

class App extends Component {
  
  render() {
    return (
      <div>
        <div className="todoapp" id="todoapp">
          <Header />
          <MainSection />
        </div>
        <div className="todoapp" id="settings">
          <CronTasks></CronTasks>
        </div>
      </div>
    )
  }
}


export default App
