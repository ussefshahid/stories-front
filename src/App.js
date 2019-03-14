import React, { Component } from 'react';
import './App.css';
import NavbarPage from './components/navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Teams from './components/teams';
import Members from './components/members';
import Home from './components/home';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarPage />
        <Router>
          <div>
            <Route path="/home" component={Home} />
            <Route path="/teams" component={Teams} />
            <Route path="/members" component={Members} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
