import React, { Component } from 'react';
import './App.css';
import NavbarPage from './components/navbar';
import Routes from './utils/routes';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarPage />
        <Routes />
      </React.Fragment>
    );
  }
}

export default App;
