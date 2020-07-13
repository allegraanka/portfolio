import React, { Component } from 'react';
import './App.css';
import ProjectData from './components/project-data/project-data.component';


class App extends Component {
  

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Allegra Portfolio</h1>
        <ProjectData /> 
      </div>
    );
  }
}

export default App;
