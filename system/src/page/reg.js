import React, { Component } from 'react'
import { Button, Form, Input, Checkbox, InputNumber } from "antd"
import "../page/reg.css"


export default class reg extends Component {
    handlereg = () => {
        // console.log(this.props)
        const username = this.refs.username.props.value;
        const password = this.refs.password.props.value;
        const age = this.refs.age.props.value;
        const adress = this.refs.adress.props.value;
        console.log(username, password, age, adress)
        if (!username) {
            alert("请输入用户名")
        } else if (!password) {
            alert("请输入密码")
        } else if (!age) {
            alert("请输入年龄")
        } else if (!adress) {
            alert("请输入地址")
        } else {
            alert("登录")
        }
    }
    render() {
        return (
            <div className="reg">
                <h2>注册页面</h2>
                <Form name="nest-messages">
                    <Form.Item name={['user', 'name']} label="用户名：" rules={[
                        {
                            pattern: /^[a-zA-Z0-9_]{4,12}$/,
                            message: '请输入正确的用户名',
                        },
                    ]}>
                        <Input ref="username" />
                    </Form.Item>
                    <Form.Item name={['user', 'password']} label="密码：" rules={[
                        {
                            pattern: /^[a-zA-Z0-9_]{4,12}$/,
                            message: '请输入正确的密码',
                        },
                    ]}>
                        <Input ref="password" />
                    </Form.Item>
                    <Form.Item name={['user', 'age']} label="年龄：" rules={[{ type: 'number', min: 0, max: 99 }]}>
                        <InputNumber ref="age" />
                    </Form.Item>
                    <Form.Item name={['user', 'website']} label="地址：">
                        <Input ref="adress" />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" className="register" onClick={this.handlereg}>
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
