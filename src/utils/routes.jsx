import React from 'react';
import '../App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Teams from '../views/teams';
import Members from '../views/members';
import Home from '../views/home';
import UserStories from '../views/userStories';
import Roles from '../views/roles';

const Routes = () => {
    return (
        <Router>
          <div>
            <Route path="/home" component={Home} />
            <Route path="/teams" component={Teams} />
            <Route path="/members" component={Members} />
            <Route path="/userStories" component={UserStories} />
            <Route path="/roles" component={Roles} />
          </div>
        </Router>
    );
}

export default Routes;