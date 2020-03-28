import React from 'react'
import {Router, Route, Switch} from 'react-router-dom';
import history from '../history';
import HomePage from '../pages/HomePage';
import AssetsPage from '../pages/AssetsPage';
import Navigation from './Navigation';

const Root = () => {
  return (
  <>
  <Router history={history}>
    <Navigation/>
    <div id ="main-container">
      <Switch>
        <Route path="/" exact component = {HomePage}/>
        <Route path="/Assets" exact component = {AssetsPage}/>
      </Switch>
    </div>
  </Router>
  </>
  )
}

export default Root;
