import React from 'react'
import UserInfo from './userInfo';
import Inser from './inser/inser'

import { Route, NavLink, Switch, Redirect, useHistory } from "react-router-dom";
import { Layout, Menu, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header,  Sider, Content } = Layout;

export default function Admin() {
    let history = useHistory();
    const exit = () => {
        sessionStorage.clear()
        history.replace("/login")
    }
    return (
        <Layout>
            <Header className="header" style={{ backgroundColor: "#fff" }}>
                <h1 style={{ color: " #A4D3EE", width: 600, float: "left" }}>后台管理系统</h1>
                <Button onClick={exit} style={{ float: "right", margin: 20 }}>退出</Button>
            </Header>
            <Content style={{ padding: "0 50px", height: 520 }}>
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
                                    <NavLink to="/admin/user" activeStyle={{ color: "#f00" }}>
                                        商品信息
                                    </NavLink>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content style={{ padding: "0 24px", minHeight: 280 }}>
                        <Switch>
                            <Route path="/admin/user" component={UserInfo}></Route>
                            <Route path="/admin/inser" component={Inser}></Route>

                            <Redirect to="/admin/user" exact></Redirect>

                        </Switch>
                    </Content>
                </Layout>
            </Content>
          
        </Layout>
    )
}
