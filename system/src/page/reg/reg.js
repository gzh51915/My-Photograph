import React from 'react'
import { Form, Input, Button, message } from "antd"
import "./reg.css"
import { resSvg, resReg } from "../../api"

export default class Reg extends React.Component {
    state = {
        data: <h1>222</h1>
    }
    reg = async () => {
        const username = this.refs.username.props.value;
        const password = this.refs.password.props.value;
        const age = this.refs.age.props.value;
        const address = this.refs.address.props.value;
        const vvv = this.refs.vvv.value;
        // const vcode = this.refs.vcode.value;
        console.log(username, password, age, address,vvv)
        console.log(this.refs.vvv,99999999)

        if (!username) {
            alert("请输入用户名")
        } else if (!password) {
            alert("请输入密码")
        } else if (!age) {
            alert("请输入年龄")
        } else if (!address) {
            alert("请输入地址")
        } else if (!vvv) {
            alert("请输入验证码")
        }
        else {
            let result = await resReg(username, password, age, address, vvv)
            let vcode = sessionStorage.getItem("vcode")
            if (vvv===vcode) {
                message.success("注册成功")
                this.props.history.replace("/login")
            } else {
                message.error("验证码不正确")
            }
        }
    }

    svg = async () => {
        let svg = await resSvg()
        sessionStorage.setItem("vcode",svg.vcode)
        this.setState({
            data: svg.data
        })
    }
    async componentDidMount() {
        let svg = await resSvg()
        sessionStorage.setItem("vcode",svg.vcode)
        this.setState({
            data: svg.data
        })

    }
    render() {
        return (
            <div className="reg">
                <h2>注册页面</h2>
                <Form>
                    <Form.Item
                        label="用户名："
                        name="username"
                        rules={[
                            { pattern: /^[0-9a-zA-Z_]{3,8}$/, message: '请输入3到8位只有数字、字母和下划线的用户名' }
                        ]}
                    >
                        <Input ref="username" />
                    </Form.Item>

                    <Form.Item
                        label="密码："
                        name="password"
                        rules={[
                            { pattern: /^[0-9]{3,8}$/, message: '请输入3到8位只有数字的密码' }
                        ]}
                    >
                        <Input.Password ref="password" />
                    </Form.Item>
                    <Form.Item
                        label="年龄："
                        name="age"
                        rules={[
                            { pattern: /^[0-9]{1,2}$/, message: '请输入0到99岁' }
                        ]}
                    >
                        <Input ref="age" />
                    </Form.Item>
                    <Form.Item
                        label="地址："
                        name="address"
                    >
                        <Input ref="address" />
                    </Form.Item>
{/* <input ref="vcode"></input> */}
                    验证码：<input ref="vvv" style={{ width: 150, marginBottom: 20 }}></input>
                    <span onClick={this.svg} className="svg" style={{ height: 40 }} dangerouslySetInnerHTML={{ __html: this.state.data }}></span>

                    <Form.Item>
                        <Button className="regButton" onClick={this.reg} type="primary" htmlType="submit">
                            注册
                         </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
