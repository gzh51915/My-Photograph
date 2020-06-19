import React, { Component } from 'react'
import { Button, Form, Input, InputNumber } from "antd"
import "./insert.css"
import { Link } from "react-router-dom"
import { resUpdate, resCreate } from '../../api'
import { IdcardFilled } from '@ant-design/icons'


export default class reg extends Component {
    constructor() {
        super()
        this.handlereg = this.handlereg.bind(this)
    }

    handlereg = async (props, e) => {
        let username = this.refs.username.props.value;
        let password = this.refs.password.props.value;
        let age = this.refs.age.props.value * 1;
        let address = this.refs.adress.props.value;
        console.log(username, password, age, address)


        if (!username) {
            alert("请输入正确的用户名")
        } else if (!password) {
            alert("请输入正确的密码")
        } else if (!age) {
            alert("请输入正确的年龄")
        } else if (!address) {
            alert("请输入正确的地址")
        } else {
            if (!props) {
                await resCreate(username, password, age, address)
            } else {
                await resUpdate(props._id, age, address)
            }
            this.props.history.push("/user")
        }

    }

    render() {
        const data = this.props.location.state.props
        const { username, password, age, address, _id } = data || "";
        return (
            <div className="insert">
                <div className="head">
                    <Button className="return"> <Link to={"/user"}>返回</Link></Button>
                    <h2>增加或修改</h2>
                </div>
                <Form name="nest-messages" initialValues={{ username, password, age, address, _id }}>
                    <Form.Item initialValue={username} name={['user', 'name']} label="用户名：" rules={[
                        {
                            pattern: /^[a-zA-Z0-9_]{4,12}$/,
                            message: '请输入正确的用户名',
                        },
                    ]}>
                        <Input ref="username" disabled={username === undefined ? "" : "disabled"} className="username" />
                    </Form.Item>
                    <Form.Item initialValue={password} name={['user', 'password']} label="密码：" rules={[
                        {
                            pattern: /^[a-zA-Z0-9_]{4,12}$/,
                            message: '请输入正确的密码',
                        },
                    ]}>
                        <Input ref="password" disabled={username === undefined ? "" : "disabled"} />
                    </Form.Item>
                    <Form.Item initialValue={age} name={['user', 'age']} label="年龄：" rules={[{
                        max: 100,
                        message: '请输入4-12位的数字',
                    },]}>
                        <Input ref="age" />
                    </Form.Item>
                    <Form.Item initialValue={address} name={['user', 'website']} label="地址：">
                        <Input ref="adress" />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" className="register" onClick={this.handlereg.bind(this, data)}>
                            保存{age}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
