import React, { Component } from 'react'
import { Button, Form, Input, InputNumber } from "antd"
import "../page/insert.css"
import {Link} from "react-router-dom"


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
        console.log(this.props.location.state)
        return (
            <div className="insert">
                <div className="head">
                    <Button className="return"> <Link to={"/user"}>返回</Link></Button>
                    <h2>增加或修改</h2>
                </div>
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
