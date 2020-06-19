import React, { Component } from 'react'
import { Button, Form, Input, InputNumber } from "antd"
import "../page/insert.css"
import { Link } from "react-router-dom"
import {resUpdate,resCreate} from "../api/index"

export default class reg extends Component {


     handlereg = async (props) => {
                console.log(this.props)
                var username = this.refs.username.props.value;
                const password = this.refs.password.props.value;
                const age = this.refs.age.props.value * 1;
                const address = this.refs.adress.props.value;
        //         console.log(username, password, age, address)

                if (!username) {
                    alert("请输入正确的用户名")
                } else if (!password) {
                    alert("请输入正确的密码")
                } else if (!age) {
                    alert("请输入正确的年龄")
                } else if (!address) {
                    alert("请输入正确的地址")
                } else {

                    if (props._id) {
                        await resUpdate(age,address)
                    } else {
                        await resCreate( username,password, age, address)
                        console.log(this.props);
                    }
                }
            }
    render() {

        const { username, password, _id, address } = this.props.location.state.props || "";
        // console.log(username, password, _id, address)
        return (
            <div className="insert">
                <div className="head">
                    <Button className="return"> <Link to={"/user"}>返回</Link></Button>
                    <h2>增加或修改</h2>
                </div>
                <Form name="nest-messages" initialValues={{ username, password, _id, address }}>
                    <Form.Item initialValue={username} name={['user', 'name']} label="用户名：" rules={[
                        {
                            pattern: /^[a-zA-Z0-9_]{4,12}$/,
                            message: '请输入正确的用户名',
                        },
                    ]}>
                        <Input ref="username" disabled={username===undefined?"":"true"} />
                    </Form.Item>
                    <Form.Item initialValue={password} name={['user', 'password']} label="密码：" rules={[
                        {
                            pattern: /^[a-zA-Z0-9_]{4,12}$/,
                            message: '请输入正确的密码',
                        },
                    ]}>
                        <Input ref="password" disabled={username===undefined?"":"true"} />
                    </Form.Item>
                    <Form.Item initialValue={_id} name={['user', 'age']} label="年龄：" rules={[{ type: 'number', min: 0, max: 99 }]}>
                        <InputNumber ref="age" />
                    </Form.Item>
                    <Form.Item initialValue={address} name={['user', 'website']} label="地址：">
                        <Input ref="adress" />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" className="register" onClick={this.handlereg}>
                            保存
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
