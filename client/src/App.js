import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import SideNavPage from './components/SideNavPage';
import HomeDashboard from './pages/Homepage';

function App() {
  return (
    <div>
      <Router basename='/'>
        <SideNavPage />
        <Switch>
          <Route exact path={["/", "/homepage"]} component={HomeDashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
