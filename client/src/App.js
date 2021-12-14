import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import SideNavPage from './components/SideNavPage';
import HomeDashboard from './pages/HomeDashboard';

function App() {
  return (
    <div>
      <Router basename='/'>
        <SideNavPage />
        <Switch>
          <Route exact path={["/", "/dashboard"]} component={HomeDashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
