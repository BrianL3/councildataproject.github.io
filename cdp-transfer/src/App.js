import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Routes/Home';
import About from './Routes/About';
import SiteHeader from './Routes/SiteHeader'
import Publicity from './Routes/Publicity';
import MeetTheTeam from "./Routes/MeetTheTeam";
import SearchingWithCDP from './Routes/How/SearchingWithCDP';
import UsingCDPPlatform from './Routes/How/UsingCDPPlatform';
import VolunteerWithUs from './Routes/How/VolunteerWithUs';

export default function App() {
  return (
    <Router>
      <div>
        <SiteHeader /> {
        /*SiteHeader is the nav bar at the top of the site. 
        Add and adjust visual components there, then add their routes to the Router below.*/}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/meet-the-team">
            <MeetTheTeam />
          </Route>
          <Route path="/publicity">
            <Publicity />
          </Route>
          <Route path="/searching-with-cdp">
            <SearchingWithCDP />
          </Route>
          <Route path="/using-cdp-platform">
            <UsingCDPPlatform />
          </Route>
          <Route path="/volunteer">
            <VolunteerWithUs />
          </Route>
          {/* <Route path="/contact">
            <Publicity />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}