import React ,{Component} from 'react'
import {Carousel, Card} from 'antd'
import {ArrowLeftOutlined,InfoCircleOutlined} from '@ant-design/icons'
import http from '../utils/http'
import '../css/detail.css'


export default class detail extends Component {
    constructor(props){
        super()
        this.state = {
            data:[],
            title:"",
            card:[]
        }
    }
    async componentDidMount(){
        const {id} = this.props.match.params
        let data = await http.get("/detail/" + id)
        
        this.setState({
            data:data[0],
            title:eval(data[0].destinationCity)[0],
            card:eval(data[0].productThemes)
        })
        
    }
    back = ()=>{
        const {title} = this.state
        const {history} = this.props
        history.push('/list2/' + title)
      }
    render() {
        const {data,card} = this.state
        console.log(data);
        
        return (
            <div>
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
                    【多重礼遇花样游】长白山4日3晚自由行●宿万达智选假日酒店（高级房+趣味骑行+西坡巴士+限时水乐园+延迟退房+接送机）
                    </div>
                    <div className="item-money">
                    <span className="crred" id="price">
                        ￥
                        <em>1174</em>
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
                </section>
            </div>
        )
    }
}

