import React, { Component } from 'react'
import { Button, Form, Input, InputNumber } from "antd"
import "./insert.css"
import { Link } from "react-router-dom"
import { resUpdate, resCreate } from '../../api'


export default class reg extends Component {
    constructor() {
        super()
        this.handlereg = this.handlereg.bind(this)
    }

    handlereg = async (props, e) => {
       
        let title = this.refs.title.props.value;
        let price = this.refs.price.props.value;
        let resprice = this.refs.resprice.props.value;
        console.log(title, price, resprice)


        if (!title) {
            alert("请输入商品名称")
        } else if (!price) {
            alert("请输入现价")
        } else if (!resprice) {
            alert("请输入原价")
        } else {
            if (!props) {
                await resCreate(title, price, resprice)
            } else {
                await resUpdate(props._id, title, price, resprice)
            }
            this.props.history.push("/admin/user")
        }

    }

    render() {
        const data = this.props.location.state.props
        const { title, price, resprice,  _id } = data || "";
        return (
            <div className="insert">
                <div className="head">
                    <Button className="return"> <Link to={"/admin/user"}>返回</Link></Button>
                    <h2>增加或修改</h2>
                </div>
                <Form name="nest-messages" initialValues={{title, price, resprice,  _id }}>
                    <Form.Item initialValue={title} name={['user', 'name']} label="商品名称：" >
                        <Input ref="title"  className="username" />
                    </Form.Item>
                    <Form.Item initialValue={price} name={['user', 'password']} label="原价：" >
                        <Input ref="price" />
                    </Form.Item>
                    <Form.Item initialValue={resprice} name={['user', 'age']} label="现价：" >
                        <Input ref="resprice" />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" className="register" onClick={this.handlereg.bind(this, data)}>
                            保存
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
