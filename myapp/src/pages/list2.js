import React, { Component } from 'react'
import {ArrowLeftOutlined} from '@ant-design/icons'
import {Input,Select,Tabs } from 'antd'
const { Option } = Select;
const { TabPane } = Tabs;
export default class list2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title:"",
          
        };
      }
      componentWillMount(){
        this.setState({
          title:this.props.match.params.title
        })
        
      }
      back = ()=>{
        const {history} = this.props
        history.push('/list')
      }
      render() {
        return (
          <div>
            <header className="page-head">
                <a>
                    <i>
                        <ArrowLeftOutlined onClick={this.back} style={{fontSize:22,color:'#58bc58'}}/>  
                    </i>
                </a>
              <h1>{this.state.title}</h1>
            </header>
            <section id="search search-list radius">
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
            <Tabs defaultActiveKey="1"tabBarGutter={20} tabBarStyle={{marginLeft:20}}>
              <TabPane tab="全部" key="1">
                <ul className="item-tr" style={{background:"#fff"}}>
                          {/* {
                              data.map((item,index)=>{ */}
                                <li className="item-list">
                                      <figure className="img-outer">
                                          <i className="type">自由行</i>
                                          <i className="tag">上海</i>
                                          <img src="http://media.china-sss.com/pics/gallery/201702/144ff0d5-5332-45e6-bcea-9b33ac27485e_201702231256_500_350.jpg"/>
                                      </figure>
                                      <div id="txt-outer">
                                          <h2>【多重礼遇花样游】长白山4日3晚自由行●宿万达智选假日酒店（高级房+趣味骑行+西坡巴士+限时水乐园+延迟退房+接送机）</h2>
                                          <ul className="money">
                                          <p className="label">
                                            <i style={{backgroundColor:"#00be88"}}>春秋假期 </i>
                                            <span >假日度假 </span>
                                          </p>
                                          <p className="margintb">班期："6月", "7月", "8月", "9月", "10月"</p>
                                          <li className="crred">¥<em>1174</em>起</li> 
                                          </ul>
                                      </div>
                                  </li>
                                  <li className="item-list">
                                      <figure className="img-outer">
                                          <i className="type">自由行</i>
                                          <i className="tag">上海</i>
                                          <img src="http://media.china-sss.com/pics/gallery/201702/144ff0d5-5332-45e6-bcea-9b33ac27485e_201702231256_500_350.jpg"/>
                                      </figure>
                                      <div id="txt-outer">
                                          <h2>【多重礼遇花样游】长白山4日3晚自由行●宿万达智选假日酒店（高级房+趣味骑行+西坡巴士+限时水乐园+延迟退房+接送机）</h2>
                                          <ul className="money">
                                          <p>班期："6月", "7月", "8月", "9月", "10月"</p>
                                          <li className="crred">¥<em>1174</em>起</li> 
                                          </ul>
                                      </div>
                                  </li>
                              {/* })
                          } */}
                    </ul>
              </TabPane>
              <TabPane tab="自由行" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="团队游" key="3">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="当地游" key="4">
                Content of Tab Pane 4
              </TabPane>
              <TabPane tab="酒店套餐" key="5">
                Content of Tab Pane 5
              </TabPane>
              <TabPane tab="门票" key="6">
                Content of Tab Pane 6
              </TabPane>
            </Tabs>
            
          </div>
        );
      }
}

