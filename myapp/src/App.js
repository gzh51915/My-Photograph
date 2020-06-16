import React from 'react';
import {Route,Switch,} from 'react-router-dom'
import './App.css';
// import { PageHeader } from 'antd';

import Home from './pages/home'
import List from './pages/list'
import Reg from './pages/reg'
import Login from './pages/login'
import Find from './pages/find'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/list" component={List} />
        <Route path="/reg" component={Reg} />
        <Route path="/login" component={Login} />
        {/* <Route path="/find" component={Find} /> */}
        <Find/>

      </Switch>
    </div>
  );
}

export default App;
