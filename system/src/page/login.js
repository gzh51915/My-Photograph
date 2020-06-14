import React, { Component } from 'react'
import "./login.css"
import 'antd/dist/antd.css';
import { Button, Form, Input, Checkbox } from "antd"

export default class login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    //登录
    handlesubmit = (e) => {
        // const form = this.props.form;
        // const username = form.getFieldValue("username")
        // console.log("username", username)
        alert("登录")
        console.log(this)
        const username = this.refs.username.props.value;
        const password = this.refs.password.props.value;
        // console.log(this.refs.username.props.value)
        console.log(username,password)
        // e.preventDefault();
        // console.log(this.props)
        // this.props.form.validateFields((err, values) => {
        //     if (!err) {
        //         console.log('Received values of form:', values)
        //     }
        // })
        // console.log(this.state.username)
    }
    changeUsername=()=> {
        let username = this.refs.username.value;
        this.setState({
            username
        })
        // console.log(username)
    }
    changePassword=()=>{

    }
    render() {
        // console.log(this.props)
        // const form = this.props.form;
        // console.log(form)
        // const [form] = Form.useForm();
        // console.log(form)

        return (
            <div className="login">

                {/* <input ref="username" onChange={this.changeUsername}/> */}

                <h2>登录页面</h2>
                <Form>
                    <Form.Item
                        label="用户名："
                        name="username"
                        rules={[
                            {
                                pattern: /^[a-zA-Z0-9_]{4,12}$/,
                                required: true,
                                message: '请输入正确的用户名',
                            },
                        ]}
                    >
                        <Input placeholder="请输入用户名"  ref="username" onChange={this.changeUsername}/>
                    </Form.Item>

                    <Form.Item
                        label="密码："
                        name="password"
                        rules={[
                            {
                                pattern: /^[a-zA-Z0-9_]{4,12}$/,
                                required: true,
                                message: '请输入正确的密码',
                            },
                        ]}
                    >
                        <Input.Password placeholder="请输入密码" ref="password" onChange={this.changePassword}/>
                    </Form.Item>

                    {/* <Form.Item
                        name="remember" valuePropName="checked">
                        <Checkbox checked={this.state.visible}>Remember me</Checkbox>
                    </Form.Item> */}

                    <Form.Item>
                        <Button type="primary" className="checkIn" htmlType="submit" onClick={this.handlesubmit}>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
