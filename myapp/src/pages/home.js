import React, { Component } from 'react'
import {Carousel ,Input,Select} from 'antd'
import Tab from '../components/tab'
import Tab2 from '../components/tab2'
import Demo from '../components/demo'
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
        this.demo = {
            data:[{"averageScore":"0.0","cityName":"广州","cityType":"出发","destinationCityName":"惠州","effecttime":"2020-05-26 15:23:04","expiretime":"2023-05-26 15:23:04","imgurl":"http://media.china-sss.com/pics/gallery/201808/4ee4e2b1-df18-4ced-a961-fe50892cb190_201808131046_500_350.jpg","linkurl":"/vacation/185293#C_103_","price":"96","productDesc":"","productDescs":[],"productId":"185293","productName":"【预售】惠州双月湾万科三期主题海景公寓自由行●宿1晚酒店","productSource":"1","productThemeList":[],"productType":"13","productTypeName":"自由行","scheduleDateList":["6月"],"sortno":"1"},{"averageScore":"0.0","cityName":"广州","cityType":"出发","destinationCityName":"高明市","effecttime":"2020-05-26 15:23:04","expiretime":"2023-05-26 15:23:04","imgurl":"http://media.china-sss.com/pics/gallery/201604/658fd0e0-667f-4edf-b3af-565b8fd4003d_201604281218_500_350.jpg","linkurl":"/vacation/216350#C_103_","price":"399","productDesc":"","productDescs":[],"productId":"216350","productName":"【单订 预售】高明美的鹭湖豪富高尔夫酒店自由行●宿1晚酒店","productSource":"1","productThemeList":[],"productType":"13","productTypeName":"自由行","scheduleDateList":["6月"],"sortno":"1"},{"averageScore":"0.0","cityName":"广州","cityType":"出发","destinationCityName":"重庆","effecttime":"2020-05-26 15:23:04","expiretime":"2023-05-26 15:23:04","imgurl":"http://media.china-sss.com/pics/gallery/202001/93aa59f4-095c-4cf9-980b-a27488eb7b34_202001071806_500_350.jpg","linkurl":"/vacation/216395#C_103_","price":"499","productDesc":"","productDescs":[],"productId":"216395","productName":"【单订 预售】重庆4日3晚自由行●宿3晚酒店","productSource":"1","productThemeList":[],"productType":"13","productTypeName":"自由行","scheduleDateList":["6月","7月","8月","9月","10月","11月","12月"],"sortno":"1"},{"averageScore":"0.0","cityName":"广州","cityType":"出发","destinationCityName":"英德市","effecttime":"2020-05-26 15:23:04","expiretime":"2023-05-26 15:23:04","imgurl":"http://media.china-sss.com/pics/gallery/202003/3c85e069-37c0-46eb-a0a4-3cc9911f4737_202003191654_500_350.jpg","linkurl":"/vacation/217178#C_103_","price":"399","productDesc":"","productDescs":[],"productId":"217178","productName":"【单订 预售】英德市宝墩湖三房别墅自由行●宿1晚酒店","productSource":"1","productThemeList":[],"productType":"13","productTypeName":"自由行","scheduleDateList":["6月"],"sortno":"1"}],
            data2:[{"averageScore":"0.0","cityName":"西安","cityType":"出发","destinationCityName":"西安","effecttime":"2020-05-26 15:23:36","expiretime":"2023-05-26 15:23:36","imgurl":"http://media.china-sss.com/pics/gallery/201712/d6426bad-7657-436f-8b14-5ff1e5a48260_201712181516_500_350.jpg","linkurl":"/vacation/161118#C_104_","price":"397.5","productDesc":"","productDescs":[],"productId":"161118","productName":"【品质 休闲】西安 天域凯莱大酒店2晚+景区语音讲解3日2晚自由行","productSource":"1","productThemeList":[],"productType":"13","productTypeName":"自由行","scheduleDateList":["6月","7月","8月","9月","10月"],"sortno":"1"},{"averageScore":"0.0","cityName":"广州","cityType":"出发","destinationCityName":"西安","effecttime":"2020-05-26 15:23:36","expiretime":"2023-05-26 15:23:36","imgurl":"http://media.china-sss.com/pics/gallery/201911/02c240ad-7ec3-4e14-9ecf-8a025377a3b5_201911251604_500_350.jpg","linkurl":"/vacation/216594#C_104_","price":"375","productDesc":"","productDescs":[],"productId":"216594","productName":"【品质 休闲】西安3日2晚自由行●宿2晚鼓楼金茂酒店","productSource":"1","productThemeList":[],"productType":"13","productTypeName":"自由行","scheduleDateList":["6月","7月","8月","9月","10月"],"sortno":"1"}]
        }
        
    }
    onChange = (a, b,c) => {
        console.log(a, b, c);
      }
    
    render() {
        const {tab,tab2} = this.state
        // console.log(this.state,tab);
        const {data , data2} = this.demo
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
                            <div id="limit-panel">
                                <ul>
                                    <li>
                                        <figure className="img-outer">
                                            <i>当前狂欢</i>
                                            <img src="http://media.china-sss.com/pics/gallery/202003/17f3d0b1-46b8-4a6c-bf0a-ec1a528045b8_202003121509_500_350.jpg"/>
                                        </figure>
                                        <div id="txt-outer">
                                            <h2>【单订 预售】惠州万科双月湾二期希腊风情洋房小别墅两房一厅自由行●宿1晚酒店</h2>
                                            <ul className="money">
                                                <li className="crred">¥<em>388</em>起</li> 
                                                <li>
                                                    <span>广州出发</span> 
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <ul className="push-wrap">
                                <li>
                                    <h3>新人大礼包</h3>
                                    <p>666优惠券</p>
                                    <img src="//media.china-sss.com/img/M00/00/0C/wKjFbVp4JcWAY0tsAAAgFUy47Eo190.png" /> 
                                </li>
                                <li>
                                    <h3>锦绣和风</h3>
                                    <p></p>
                                    <img src="//media.china-sss.com/img/M00/05/92/wKjFbF4S_lOAOrysAAC69I179m8445.png"/> 
                                </li>
                                <li>
                                    <h3>欧美非专场</h3>
                                    <p></p>
                                    <img src="//media.china-sss.com/img/M00/05/2B/wKjFbF11sLCAYazJAABj3hGIiiI360.png" /> 
                                </li>
                            </ul>
                        </section>
                        <Demo data={data} data2={data2}/>
                    </div>
                    

        )
    }
}

