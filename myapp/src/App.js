import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
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
      

      {/* 路由的配置 */}
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/list" component={List} />
        <Route path="/reg" component={Reg} />
        <Route path="/login" component={Login} />
        <Route path="/notfound" component={()=><div>404</div>} />
        <Redirect from="/" to="/home" exact />
      </Switch>
    </div>
  );
}

export default App;
