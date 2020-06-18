import React from 'react';
import {Route,Switch,Redirect,withRouter } from 'react-router-dom'
import './App.css';
import { HomeOutlined, CarOutlined,EyeOutlined, MessageOutlined ,UserOutlined} from '@ant-design/icons';
import Home from './pages/home'
import List from './pages/list'
import List2 from './pages/list2'
import Reg from './pages/reg'
import Login from './pages/login'
import './css/common.css'
import 'antd/dist/antd.css'
function App(props) {
  const goto = (path) =>{
    const {history} = props
    history.push(path)
    
  }
  return (
    <div className="App">
      
      <footer>
          <span><HomeOutlined style={{fontSize:20}} onClick={()=>goto('/home')}/>首页</span>
          <span><CarOutlined style={{fontSize:20}} onClick={()=>goto('/list')}/>目的地</span>
          <span><EyeOutlined style={{fontSize:20}} onClick={()=>goto('/find')}/>发现</span>
          <span><MessageOutlined style={{fontSize:20}} />客服</span>
          <span><UserOutlined style={{fontSize:20}} onClick={()=>goto('/mine')}/>我的</span>
      </footer>
      {/* 路由的配置 */}
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/list" component={List} />
        <Route path="/list2/:title" component={List2} />
        <Route path="/reg" component={Reg} />
        <Route path="/login" component={Login} />
        <Route path="/notfound" component={()=><div>404</div>} />
        <Redirect from="/" to="/home" exact />
      </Switch>
    </div>
  );
}
App = withRouter(App)

export default App;
