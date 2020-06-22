import React, { Component } from 'react'
import {Input,Button} from 'antd'
import {ArrowLeftOutlined,EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons'

export default class reg extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            psw:""
        }
    }
    
    goto = (path)=>{
        const {history} = this.props
        history.push(path)
    }
    back = ()=>{
        const {history} = this.props
        history.push('/mine')
    }
    render() {
        return (
            <div>
                <header className="page-head">
                    <a>
                        <i>
                            <ArrowLeftOutlined style={{fontSize:22,color:'#58bc58'}} onClick={this.back}/>  
                        </i>
                    </a>
                    <h1>注册</h1>
                    <p onClick={()=>{
                        this.goto('/login')
                    }}>已有账号/登录</p>
                </header>
                <section className="login-outer">
                    <div className="login-img">
                        <img src="http://media.china-sss.com/chunqiu/m/images/user/portrait.png?releaseno=20200322_20200610" alt=""/>
                    </div>
                    <ul className="login-input">
                    <li>
                        <Input placeholder="用户名" />
                        
                    </li>
                    <li>
                        <Input.Password
                            placeholder="密码(8-12位)"
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                    </li>
                    </ul>
                    <div className="login-btn">
                        <Button type="primary" block>
                            注册
                        </Button>
                    </div>
                </section>
            </div>
        )
    }
}
