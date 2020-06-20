import React from 'react';
import './App.css';
import '../node_modules/antd/dist/antd.css';
import Login from './page/login/login';
import Admin from './page/admin';
import NotFount from './page/notFount'

import { Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="/admin" component={Admin}></Route>
      <Route path="/notFount" component={NotFount}></Route>
      <Redirect from="/" to="/login" exact></Redirect>
      <Redirect to="/notFount"></Redirect>
    </Switch>
  );
}

export default App;
