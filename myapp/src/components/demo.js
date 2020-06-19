import React from 'react'
import { Tabs } from 'antd';
import '../css/demo.css'
const { TabPane } = Tabs;
export default function Demo({data,data2}) {
    function callback(key) {
        console.log(key);
    }
    return (
        
        <div className="demo">
            <Tabs defaultActiveKey="1" onChange={callback} tabBarGutter={40} tabBarStyle={{marginLeft:60}}>
                <TabPane tab="本季热推" key="1">
                    <ul className="item-tr">
                        {
                            data.map((item,index)=>{
                               return <li className="item-list" key={index}>
                                    <figure className="img-outer">
                                        <i className="type">{item.productTypeName}</i>
                                        <i className="tag">{item.cityName+item.cityType}</i>
                                        <img src={item.imgurl}/>
                                    </figure>
                                    <div id="txt-outer">
                                        <h2>{item.productName}</h2>
                                        <ul className="money">
                                        <p>班期：{item.scheduleDateList.join(",")}</p>
                                        <li className="crred">¥<em>{item.price}</em>起</li> 
                                        </ul>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </TabPane>
                <TabPane tab="省心国内" key="2">
                <ul className="item-tr">
                        <a className="advertising">
                            <img src="//media.china-sss.com/img/M00/05/65/wKjFbF3TSseAF0oQAAFAV9Togyk429.jpg"/>
                        </a>
                        {
                            data2.map((item,index)=>{
                               return <li className="item-list" key={index}>
                                    <figure className="img-outer">
                                        <i className="type">{item.productTypeName}</i>
                                        <i className="tag">{item.cityName+item.cityType}</i>
                                        <img src={item.imgurl}/>
                                    </figure>
                                    <div id="txt-outer">
                                        <h2>{item.productName}</h2>
                                        <ul className="money">
                                        <p>班期：{item.scheduleDateList.join(",")}</p>
                                        <li className="crred">¥<em>{item.price}</em>起</li> 
                                        </ul>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </TabPane>
                <TabPane tab="酒店房劵" >
                    
                </TabPane>
            </Tabs>
        </div>
    )
}
