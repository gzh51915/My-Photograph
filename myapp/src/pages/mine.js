import React, { Component } from 'react'
import img from '../image/top-bg.png'
import '../css/mine.css'

class mine extends Component {
    constructor(props){
        super(props)
    }
    goto = (path)=>{
        const {history} = this.props
        history.push(path)
    }
    render() {
        return (
            <div className="mine">
                <div className="user">
                    <span className="imgs">
                        <p className="top">
                            登录春秋，即刻启程
                            <a className="bot"><span onClick={()=>{
                                this.goto('/login')
                            }}>登录</span>/<span onClick={()=>{
                                this.goto('/reg')
                            }}>注册</span></a>
                        </p>
                    </span>
                </div>
                <div className="mine-home">
                    <div className="mine-center">
                        <span className="s" >兑好礼</span>
                        <span className="ss">
                            <a className="sss">优惠券</a>
                            <a className="ssss">当前积分</a>
                        </span>
                    </div>
                    <div className="hy">
                        <span className="hy1">
                            <a className="hy2">超级会员</a>
                            <a className="hy3">千元红包,双倍积分,专享折扣</a>
                        </span>
                    </div>
                    <div className="dd">
                        <div className="dd1">
                            <span className="dd2">
                                <a className="dd3">全部订单</a>
                                <a className="dd4"></a>
                            </span>
                        </div>
                        <ul className="tp">
                            <li><i className="tp1" ></i>审核中</li>
                            <li><i className="tp2" ></i>待付款</li>
                            <li><i className="tp3" ></i>待出行</li>
                            <li><i className="tp4" ></i>待点评</li>
                        </ul>
                    </div>
                    <div className="ft">
                        <ul className="ftt">
                            <li> <i className="ft1" ></i> 历史订单</li>
                            <li> <i className="ft1" ></i> 定制订单</li>
                            <li> <i className="ft1" ></i> 酒店订单</li>
                            <li> <i className="ft1" ></i> 我的兑换</li>
                            <li> <i className="ft1" ></i> 春秋钱包</li>
                            <li> <i className="ft1" ></i> 借钱出游</li>
                            <li> <i className="ft1" ></i> 我的收藏</li>
                            <li> <i className="ft1" ></i> 我的咨询</li>
                            <li> <i className="ft1" ></i> 常用旅客</li>
                            <li> <i className="ft1" ></i> 常用地址</li>
                            <li> <i className="ft1" ></i> 银联境外卡</li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}

export default mine