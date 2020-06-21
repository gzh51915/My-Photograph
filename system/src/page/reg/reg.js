import React from 'react'
import { Form, Input, Button, message } from "antd"
import "./reg.css"
import { resSvg, resReg } from "../../api"

export default class Reg extends React.Component {
    state = {
        data: ''
    }
    reg = async () => {
        const username = this.refs.username.props.value;
        const password = this.refs.password.props.value;
        const age = this.refs.age.props.value;
        const address = this.refs.address.props.value;
        const vcode = this.refs.vcode.state.value;

        if (!username) {
            alert("请输入用户名")
        } else if (!password) {
            alert("请输入密码")
        } else if (!age) {
            alert("请输入年龄")
        } else if (!address) {
            alert("请输入地址")
        } else if (!vcode) {
            alert("请输入验证码")
        }
        else {
            //校验验证码是否正确
            let code = localStorage.getItem("vcode")
            if (code === vcode) {
                let result = await resReg(username, password, age, address, vcode)
                if (result.code === 200) {
                    message.success("注册成功")
                    this.props.history.replace("/login")
                } else {
                    message.error("注册失败")
                }
            } else {
                //如果不正确就刷新验证码
                message.error("请输入正确验证码")
                let svg = await resSvg();
                this.setState({
                    data: svg.data
                });
                localStorage.setItem("vcode", svg.text);
            }
        }
    }
    //点击刷新验证码
    svg = async () => {
        let svg = await resSvg();
        this.setState({
            data: svg.data
        });
        localStorage.setItem("vcode", svg.text);
    }

    //初始化验证码
    async componentDidMount() {
        let svg = await resSvg()
        this.setState({
            data: svg.data
        })
        localStorage.setItem("vcode", svg.text);

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

                    验证码：<Input ref="vcode" style={{ width: 150, marginBottom: 20 }}></Input>

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
