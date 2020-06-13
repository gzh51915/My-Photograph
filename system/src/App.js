import React from 'react';
<<<<<<< HEAD
import Login from "./page/login"
import Reg from "./page/reg"
// import { Button } from "antd"
// import {  } from "react-router-dom"

function App() {
  return (
    <div className="App">

        <Login />
      <Reg/>
    </div>
  );
=======

import './App.css';
import '../node_modules/antd/dist/antd.css';
import Login from './page/Home/login';
import UserInfo from './page/Home/userInfo';


import {Route,Link,NavLink, Router,Switch,Redirect} from 'react-router-dom';
import {Layout,Menu, Breadcrumb} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

function App() {


  return <Layout>
              <Header className="header"style={{backgroundColor:"#fff"}} >
                    <h1 style={{ color:" #A4D3EE"}}>后台管理系统</h1>
              </Header>
            <Content style={{ padding: '0 50px' }}>
                  {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                  </Breadcrumb> */}
                  <Layout className="site-layout-background" style={{ padding: '24px 0' }}>

                      <Sider className="site-layout-background" width={200}>
                      <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                      >
                        <SubMenu key="sub1" icon={<UserOutlined />} title="信息">
                          <Menu.Item key="1">
                              <NavLink to="/user" activeStyle={{color:'#f00'}}>用户资料</NavLink>
                          </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="用户管理">

                          <Menu.Item key="5">
                            <NavLink to="/login" activeStyle={{color:'#f00'}}>用户登录</NavLink>
                          </Menu.Item>

                          <Menu.Item key="6">
                            <NavLink to="/reg" activeStyle={{color:'#f00'}}>用户注册</NavLink>
                          </Menu.Item>

                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                          <Menu.Item key="9">option9</Menu.Item>

                        </SubMenu>
                      </Menu>
                    </Sider>
                  <Content style={{ padding: '0 24px', minHeight: 280 }}>

                        <Switch>

                            <Route path='/login' component={Login}></Route>
                            <Route path='/user' component={UserInfo}></Route>
                            {/* <Route path='/home' component={}></Route> */}
                            <Redirect from='/' to='/user' exact></Redirect>

                        </Switch>

                  </Content>


                  </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>


>>>>>>> 41c75a4cdd1109113913fedabfd70c3cd10f1839
}

export default App;