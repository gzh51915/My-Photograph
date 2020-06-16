import React, { Component } from 'react'
import {Carousel ,Input,Select} from 'antd'
import Tab from '../components/tab'
import Tab2 from '../components/tab2.js'
import { HomeOutlined, CarOutlined,EyeOutlined, MessageOutlined ,UserOutlined} from '@ant-design/icons';
import '../css/home.css'
const { Option } = Select;
export default class home extends Component {
    constructor(){
        super()
        this.state={
            tab:{
                title:["出境游","国内游","跟团游","自由行","周边游","日本游","泰国游","本周特惠","欧美非","机票"],
                src:["//media.china-sss.com/img/M00/00/0D/wKjFbFp8Fe-AXlfNAAA9uJ9GsC4763.png","//media.china-sss.com/img/M00/00/0D/wKjFbVp8Fe-AddRTAABAHTIDKo8375.png","//media.china-sss.com/img/M00/00/0D/wKjFbFp8FfCAdZAEAAA7vNiodwQ376.png","//media.china-sss.com/img/M00/00/0D/wKjFbVp8FfCAdjCTAAA5bDmSVGs640.png","//media.china-sss.com/img/M00/00/0D/wKjFbVp8Fe-AOF_sAAA-n8mhLbA411.png","//media.china-sss.com/img/M00/00/0D/wKjFbVp8FfCATUktAABBJKpH3X0240.png","//media.china-sss.com/img/M00/00/0D/wKjFbVp8FfCASEs0AAA4t7OapoU664.png","//media.china-sss.com/img/M00/00/0D/wKjFbVp8FgKAAhnlAABBmMVKSbo213.png","//media.china-sss.com/img/M00/00/0D/wKjFbFp8Fe-AO-OUAAA5RtHQKd0026.png","//media.china-sss.com/img/M00/00/0D/wKjFbFp8FfCADXHPAABAsytgwNk156.png"]
            },
            tab2:{
                title:["生活+","浪漫北海","酒店","旅行严选","限量疯抢"],
                src:["//media.china-sss.com/img/M00/01/8B/wKjFbVtyuKqAAh-9AAArMx2Ce3E313.png","//media.china-sss.com/img/M00/01/8B/wKjFbFtyuKqAS6vTAAArYkVZEis309.png","//media.china-sss.com/img/M00/01/8B/wKjFbVtyuKqAAh-9AAArMx2Ce3E313.png","//media.china-sss.com/img/M00/01/8B/wKjFbFtyuKqAS6vTAAArYkVZEis309.png","//media.china-sss.com/img/M00/01/8B/wKjFbVtyuKuATSgKAAAoq5uy0I4265.png"]
            }
            
        }
        
    }
    onChange = (a, b,c) => {
        console.log(a, b, c);
      }
    render() {
        const {tab,tab2} = this.state
        // console.log(this.state,tab);
        
        return (
                    <div id="home">
                        {/* 轮播图 */}
                            <Carousel autoplay>
                                <div><img src="//media.china-sss.com/img/M00/04/71/wKjFbV7HOCiAY6BTAAIN3gipfB4003.jpg" width="100%"alt=""/></div>
                                <div><img src="//media.china-sss.com/img/M00/04/6C/wKjFbV60v0uAHs9RAAFDjH7ULYA928.jpg" width="100%"alt=""/></div>
                                <div><img src="//media.china-sss.com/img/M00/04/6E/wKjFbV67mC-AZ0QsAAGRzge7Hzo678.jpg" width="100%"alt=""/></div>
                            </Carousel>
                        {/* 搜索框 */}
                        <section id="search">
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
                        <Carousel afterChange={this.onChange}>
                            <div>
                                <Tab tab = {tab}/>
                            </div>
                            <div>
                                <Tab2 tab2 = {tab2}/>
                            </div>
                        </Carousel>
                        <section id="t-box">
                            
                        </section>
                        <footer>
                            <span><HomeOutlined style={{fontSize:20}}/>首页</span>
                            <span><CarOutlined style={{fontSize:20}}/>目的地</span>
                            <span><EyeOutlined style={{fontSize:20}}/>发现</span>
                            <span><MessageOutlined style={{fontSize:20}}/>客服</span>
                            <span><UserOutlined style={{fontSize:20}}/>我的</span>
                        </footer>
                    </div>
                    

        )
    }
}

