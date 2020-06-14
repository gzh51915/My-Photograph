import React, { Component } from 'react'
import { Button, Form, Input, Checkbox, InputNumber } from "antd"
import "../page/reg.css"


export default class reg extends Component {
    handlereg(){
       alert("登录")


    }
    render() {
        return (
            <div className="reg">
                <h2>注册页面</h2>
                <Form name="nest-messages">
                    <Form.Item name={['user', 'name']} label="用户名：" rules={[
                            {
                                pattern: /^[a-zA-Z0-9_]{4,12}$/,
                                required: true,
                                message: '请输入正确的用户名',
                            },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'password']} label="密码：" rules={[
                            {
                                pattern: /^[a-zA-Z0-9_]{4,12}$/,
                                required: true,
                                message: '请输入正确的密码',
                            },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'age']} label="年龄：" rules={[{ type: 'number', min: 0, max: 99 }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={['user', 'website']} label="地址：">
                        <Input />
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
