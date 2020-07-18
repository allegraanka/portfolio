import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProjectData from './pages/project-data/project-data.component';
import HeaderComponent from './components/header/header.component';

import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './ui/Theme';
import './App.css';


class App extends Component {
  

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <HeaderComponent />
          <Switch>
            <Route exact path="/" component={() => <div>Home</div>} />
            <Route exact path="/about" component={() => <div>About</div>} />
            <Route exact path="/projects" component={ProjectData} />
            <Route exact path="/contact" component={() => <div>Contact</div>} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
