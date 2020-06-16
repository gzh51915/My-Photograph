import React, { Component } from "react";
import "./login.css";
import "antd/dist/antd.css";
import { resLogin } from "../api";
import { Button, Form, Input, Checkbox } from "antd";

export default class login extends Component {
  // formRef = React.createRef();
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }
  onFinish = (values) => {
    alert(values.username);
  }; //登录

  handlesubmit = async (e) => {


    const username = this.refs.username.props.value;
    const password = this.refs.password.props.value;

    if (username && password) {
      // alert("登录")
      const result = await resLogin(username, password);
      console.log("result", result);
    } else {
      alert("没登录");
    }
  };
  changeUsername = () => {
    let username = this.refs.username.value;
    this.setState({
      username,
    });
  };
  changePassword = () => {};

  render() {
    return (
      <div className="login">
        <h2>登录页面</h2>

        <Form onFinish={this.onFinish}>
          <Form.Item
            label="用户名："
            name="username"
            rules={[
              {
                pattern: /^[a-zA-Z0-9_]{4,12}$/,
                required: true,
                message: "请输入正确的用户名",
              },
            ]}
          >
            <Input
              placeholder="请输入用户名"
              ref="username"
              onChange={this.changeUsername}
            />
          </Form.Item>

          <Form.Item
            label="密码："
            name="password"
            rules={[
              {
                pattern: /^[a-zA-Z0-9_]{3,12}$/,
                required: true,
                message: "请输入正确的密码",
              },
            ]}
          >
            <Input.Password
              placeholder="请输入密码"
              ref="password"
              onChange={this.changePassword}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              className="checkIn"
              htmlType="submit"
              onClick={this.handlesubmit}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
