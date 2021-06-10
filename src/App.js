// Imp React Imports
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

// CSS imports
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Pages Imports
import Home from "../src/page/index.jsx";
import page404 from '../src/page/404/404';
import Pool1 from "../src/page/pool1/pool1";
import LDRPOOL from "../src/page/ldr_pool/ldr_pool";
import pool2 from "../src/page/pool2/pool2.js";
import migration from "../src/page/migration/migration.js";

// Actual Page render
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route  path="/" excat component={Home} /> */}
          <Route excat path="/home" component={Home} />
          <Route excat path="/pool1" component={Pool1} />
          <Route excat path="/ldrpool" component={LDRPOOL} />
          <Route excat path="/pool2" component={pool2} />
          <Route excat path="/migration" component={migration} />
          <Route excat path="/404" component={page404}></Route>
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}
export default App;
