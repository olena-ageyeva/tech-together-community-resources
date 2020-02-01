
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ForWomen from "./ForWomen";

import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ProviderScreen from './components/ProviderScreen'
import ProviderDetails from './components/ProviderDetails'
import ProviderInformation from './components/ProviderInformation'
import ProviderRegistration from './components/ProviderRegistration'
import Women from './components/Women'

export const history = createBrowserHistory()
export default class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <NavBar history={ history }/>
        <Router history={ history }>
          <Switch>
            <Route exact path='/' component={ Home }/>
                <Route path='/providers' component={ ProviderScreen }/>
                <Route path='/provider/:id/details' component={ ProviderDetails }/>
                <Route path='/provider/registration' component={ ProviderRegistration }/>
                <Route path='/provider/:id/information' component={ ProviderInformation }/>
                <Route path='/women' component={ Women }/>
          </Switch>
        </Router>
      </div>
    )
  }
}

