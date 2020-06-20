import React from "react";

import "./App.css";
import "../node_modules/antd/dist/antd.css";
import Login from "./page/login";
import UserInfo from "./page/userInfo";
import NotFound from './page/notFount'
import Inser from "./page/inser";
import {
  Route,
  Link,
  NavLink,
  Router,
  Switch,
  Redirect,
  useHistory
} from "react-router-dom";
import { Layout, Menu ,Button} from "antd";
import { UserOutlined, LaptopOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

function App() {

  let history = useHistory();
  const exit = () => {
    sessionStorage.clear()
    history.replace("/login")
  }

  return (
    <Layout>
      <Header className="header" style={{ backgroundColor: "#fff" }}>
        <h1 style={{ color: " #A4D3EE",width:600,float:"left" }}>后台管理系统</h1>
        <Button onClick={exit} style={{ float: "right", margin: 20 }}>退出</Button>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="信息">
                <Menu.Item key="1">
                  <NavLink to="/user" activeStyle={{ color: "#f00" }}>
                    用户资料
                  </NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="用户管理">
                <Menu.Item key="5">
                  <NavLink to="/login" activeStyle={{ color: "#f00" }}>
                    用户登录
                  </NavLink>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Switch>

              <Route path="/login" component={Login}></Route>
              <Route path="/user" component={UserInfo}></Route>
              {/* <Route path='/increase' component={Increase}></Route> */}
              <Route path="/inser" component={Inser}></Route>
              <Route path="/notfound" component={NotFound}></Route>
              <Redirect from="/" to="/login" exact></Redirect>
              <Redirect to="/notfound"></Redirect>

            </Switch>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
