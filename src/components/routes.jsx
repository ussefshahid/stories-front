import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Teams from './teams';
import Members from './members';
import Home from './home';

const Routes = () => {
    return (
        <Router>
          <div>
            <Route path="/home" component={Home} />
            <Route path="/teams" component={Teams} />
            <Route path="/members" component={Members} />
          </div>
        </Router>
    );
}

export default Routes;