import React from 'react'
import {Router, Route, Switch} from 'react-router-dom';
import history from '../history';
import HomePage from '../pages/HomePage';
import AssetsPage from '../pages/AssetsPage';
import DetailAssetsPage from '../pages/DetailAssetPage';
import Navigation from './Navigation';
import Footer from './Footer';

const Root = () => {
  return (
  <>
  <Router history={history}>
    <Navigation/>
    <div id ="main-container">
      <Switch>
        <Route path="/" exact component = {HomePage}/>
        <Route path="/Assets" exact component = {AssetsPage}/>
        <Route path="/Assets/:Id" exact component = {DetailAssetsPage}/>
      </Switch>
    </div>
    <Footer/>
  </Router>
  </>
  )
}

export default Root;
