import React, { Component } from 'react'
import {ArrowLeftOutlined} from '@ant-design/icons'
import {Input,Select,Tabs} from 'antd'

import '../css/list.css'
const { Option } = Select;
const { TabPane } = Tabs;
export default class list extends Component {
    constructor(){
        super()
        this.state = {
        mode: 'left',
        data:[{"description":"","descriptions":[],"imgurl":"//media.china-sss.com/img/M00/04/2C/wKjFbVvHC2qAIE-9AAE_5dThUT0381.jpg","linkurl":"http://m.springtour.com/%E4%B8%8A%E6%B5%B7-%E9%95%BF%E7%99%BD%E5%B1%B1","subtitle":"ChangBaiShan","title":"长白山"},{"description":"","descriptions":[],"imgurl":"//media.china-sss.com/img/M00/04/E8/wKjFbF0R6XGARUzXAAFicFLMkdo771.jpg","linkurl":"https://m.springtour.com/上海-西班牙","subtitle":"Spain","title":"西班牙"},{"description":"300*200","descriptions":[],"imgurl":"//media.china-sss.com/img/M00/05/17/wKjFbF1T-ZKAG_PTAAEzatjm12w301.jpg","linkurl":"http://m.springtour.com/shanghai-%E6%B2%99%E5%B7%B4","subtitle":"Sabah","title":"沙巴"},{"description":"","descriptions":[],"imgurl":"//media.china-sss.com/img/M00/04/2C/wKjFbVvG_7iANaGOAAFm7lLPWTw598.jpg","linkurl":"https://m.springtour.com/上海-法国","subtitle":"FRANCE","title":"法国"},{"description":"","descriptions":[],"imgurl":"//media.china-sss.com/img/M00/05/39/wKjFbF2KzMiARN9sAAEI6hF0ceM094.jpg","linkurl":"https://m.springtour.com/shanghai-%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A","subtitle":"Australia","title":"澳大利亚"}]
    };
    }
    render() {
        const {data} = this.state
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
                {/* <Tabs tabPosition={this.state.tabPosition}>
                    <TabPane tab="Tab 1" key="1">
                        <ul className="ul-img">
                            <li>
                                <h3>
                                    <span>长白山</span>
                                    CHANGBAISHAN
                                </h3>
                                <img src="//media.china-sss.com/img/M00/04/2C/wKjFbVvHC2qAIE-9AAE_5dThUT0381.jpg"/>
                            </li>
                            <li>
                                <h3>
                                    <span>长白山</span>
                                    CHANGBAISHAN
                                </h3>
                                <img src="//media.china-sss.com/img/M00/04/2C/wKjFbVvHC2qAIE-9AAE_5dThUT0381.jpg"/>
                            </li>
                            <li>
                                <h3>
                                    <span>长白山</span>
                                    CHANGBAISHAN
                                </h3>
                                <img src="//media.china-sss.com/img/M00/04/2C/wKjFbVvHC2qAIE-9AAE_5dThUT0381.jpg"/>
                            </li>
                        </ul>
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        Content of Tab 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of Tab 3
                    </TabPane>
                    <TabPane tab="Tab 4" key="4">
                        Content of Tab 4
                    </TabPane>
                </Tabs> */}
                <Tabs defaultActiveKey="0" tabPosition={this.state.mode}>
                    {data.map(i => (
                        <TabPane tab={`Tab-${i}`} key={i}>
                        Content of tab {i}
                        </TabPane>
                    ))}
                    </Tabs>
            </div>
        )
    }
}

