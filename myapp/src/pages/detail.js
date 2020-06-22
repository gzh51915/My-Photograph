import React ,{Component} from 'react'
import {Carousel,Button,message} from 'antd'
import {ArrowLeftOutlined,InfoCircleOutlined,CustomerServiceOutlined,HeartOutlined} from '@ant-design/icons'
import http from '../utils/http'
import '../css/detail.css'


export default class detail extends Component {
    constructor(props){
        super()
        this.state = {
            data:[],
            title:"",
            card:[],
        }
    }
    async componentDidMount(){
        const {id} = this.props.match.params
        let data = await http.get("/detail/" + id)
        this.setState({
            data:data[0],
            title:eval(data[0].destinationCity)[0],
            card:eval(data[0].productThemes),
        })
        
    }
    success = () => {
        message.success('提交成功');
      };
      
    back = ()=>{
        const {title} = this.state
        const {history} = this.props
        history.push('/list2/' + title)
      }
    render() {
        const {data,card} = this.state
        
        return (
            <div className="detail">
                <header className="page-head">
                    <a>
                        <i>
                            <ArrowLeftOutlined onClick={this.back} style={{fontSize:22,color:'#58bc58'}}/>  
                        </i>
                    </a>
                    <h1>详情页</h1>
                </header>
                <Carousel className="detail-banner">
                    <div><img src={data.picture} width="100%" height="205px" alt=""/></div>
                </Carousel>
                <section className="detail-title">
                    <div className="h2">
                        {data.name}
                    </div>
                    <div className="item-money">
                    <span className="crred" id="price">
                        ￥
                        <em>1179</em>
                        <label className="cr6">起/人</label></span>
                        <InfoCircleOutlined style={{color:"#0080FF"}}/>
                    </div>
                    <div className="poster-outer">
                        <div className="item-card">
                            {
                                card.map(item=>{
                                return <span key={item}>{item}</span>
                                })
                            }
                        </div>
                    </div>
                    <div className="item-brand">
                        <i className="bgred" style={{backgroundColor: "rgb(0, 190, 136)"}}>春秋假期</i>
                        <p>以度假为主的自由行品牌。</p>
                    </div>
                    <section className="item-illustrate">
                        <span>
                            优惠：
                        </span>
                        <span className="t-inner">
                        ★ 夏季礼遇1：酒店每间夜含2人度假区
                        </span>
                    </section>
                </section>
                {/* 按钮 */}
                <div className="btn">
                    <ul>
                        <li>
                            <i className="icon-phone"><HeartOutlined /></i>收藏
                        </li>
                        <li>
                            <i className="icon-phone">
                            <CustomerServiceOutlined /></i>客服
                        </li>
                        <li>

                            <Button onClick={
                                    this.success
                                } style={{width:225,height:"100%",color:"#fff",backgroundColor:"#f84",fontSize:16}}>提交意向
                            </Button>
                        </li>
                        
                    </ul>
                </div>
            </div>
        )
    }
}

