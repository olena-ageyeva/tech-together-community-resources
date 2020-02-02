import React, { Component } from "react";

import ForWomen from "./ForWomen";

import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import NavBar from "./NavBar";
import Home from "./Home";
import ProviderScreen from "./ProviderScreen";
import ProviderDetails from "./ProviderDetails";
import ProviderInformation from "./ProviderInformation";
import ProviderRegistration from "./ProviderRegistration";
import Women from "./Women";
import Login from "./Login";
import WomenScreen from "./WomenScreen";
import ReseacherScreen from "./ReseacherScreen";
import ReseacherRegistration from "./ReseacherRegistration";

export const history = createBrowserHistory();
export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <NavBar history={history} />
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/providers" component={ProviderScreen} />
            <Route path="/provider/:id/details" component={ProviderDetails} />
            <Route
              path="/provider/registration"
              component={ProviderRegistration}
            />
            <Route
              path="/provider/:id/information"
              component={ProviderInformation}
            />
            <Route path="/woman/registration" component={Login} />
            <Route
              path="/reseachers/registration"
              component={ReseacherRegistration}
            />
            <Route path="/women" component={ForWomen} />
            <Route path="/researchers" component={ReseacherScreen} />
            <Route path="/login" component={WomenScreen} />
          </Switch>
        </Router>
      </div>
    );
  }
}
