import React, { Component } from 'react';
import './App.css';
import ProjectData from './components/project-data/project-data.component';
import HeaderComponent from './components/header/header.component';


class App extends Component {
  

  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <ProjectData /> 
      </div>
    );
  }
}

export default App;
