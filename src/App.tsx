import React from 'react';
import LandingPage from './pages/LandingPage'
import InfoPage from './pages/InfoPage'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

const App: React.FC = (): JSX.Element => {
  return (
      <Router>
        <div>
          <Switch>
            <Redirect exact from="/" to="/home"/>
            <Route exact path="/home" component={LandingPage}/>
            <Route exact path="/details/:type/:id" component={InfoPage}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
