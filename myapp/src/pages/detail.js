import React ,{Component} from 'react'
import {Carousel} from 'antd'
import {ArrowLeftOutlined} from '@ant-design/icons'
import http from '../utils/http'


export default class detail extends Component {
    constructor(props){
        super()
        this.state = {
            data:[],
            title:""
        }
    }
    async componentDidMount(){
        const {id} = this.props.match.params
        let data = await http.get("/detail/" + id)
        
        this.setState({
            data:data[0],
            title:eval(data[0].destinationCity)[0]
        })
    }
    back = ()=>{
        const {title} = this.state
        const {history} = this.props
        history.push('/list2/' + title)
      }
    render() {
        const {data,title} = this.state
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
                    <div><img src={data.picture} width="100%" alt=""/></div>
                </Carousel>
            </div>
        )
    }
}

