import React, { Component } from 'react'
import {ArrowLeftOutlined} from '@ant-design/icons'
import {Input,Select,Tabs} from 'antd'
import http from '../utils/http'
import '../css/list.css'
const { Option } = Select;
const { TabPane } = Tabs;
export default class list extends Component {
    constructor(props){
        super()
        this.state = {
        mode: 'left',
        list:[]
    };
    }
    goto = (title)=>{
        const {history} = this.props
        
        history.push('/list2/' + title)
    }
    async componentDidMount(){
        let data = await http.get("/all1")
        this.setState({
            list:data
        })
    }
    render() {
        const {list} = this.state
        
        return (
            <div>
                <header className="page-head">
                    <a>
                        <i>
                            <ArrowLeftOutlined style={{fontSize:22,color:'#58bc58'}}/>  
                        </i>
                    </a>
                    <h1>目的地</h1>
                </header>
                <section id="search search-list">
                        <Input.Group compact>
                            <Select defaultValue="广州" size="large">
                                <Option value="广州">广州</Option>
                                <Option value="上海">上海</Option>
                                <Option value="北京">北京</Option>
                                <Option value="深圳">深圳</Option>
                            </Select>
                            <Input style={{ width: '79.6%' }} defaultValue="请输入你想要去的地方" prefix="" size="large"/>
                        </Input.Group>
                </section>
                <Tabs defaultActiveKey="0" tabPosition={this.state.mode}>
                
                    {list.map((item,index) => (
                        <TabPane tab={item.title} key={item.title}>
                        <ul className="ul-img" key={index}>
                            {
                                JSON.parse(item.data).map((ele,idx)=>{
                                    return <li key={idx} onClick={this.goto.bind(this,ele.title)} >
                                        <h3>
                                            <span>{ele.title}</span>
                                            {ele.subtitle}
                                        </h3>
                                        <img src={ele.imgurl}/>
                                    </li>
                                })
                            }
                        </ul>
                        </TabPane>
                    ))}
                </Tabs>
            </div>
        )
    }
}

