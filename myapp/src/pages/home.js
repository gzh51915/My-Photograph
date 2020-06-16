import React, { Component } from 'react'
import {Carousel ,Input,Select,Card} from 'antd'
import '../css/home.css'
const { Option } = Select;
const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };
export default class home extends Component {
    onChange = (a, b, c) => {
        console.log(a, b, c);
      }
    render() {
        return (
            <div id="home">
                {/* 轮播图 */}
                    <Carousel autoplay>
                        <div><img src="//media.china-sss.com/img/M00/04/71/wKjFbV7HOCiAY6BTAAIN3gipfB4003.jpg" width="100%"/></div>
                        <div><img src="//media.china-sss.com/img/M00/04/6C/wKjFbV60v0uAHs9RAAFDjH7ULYA928.jpg" width="100%"/></div>
                        <div><img src="//media.china-sss.com/img/M00/04/6E/wKjFbV67mC-AZ0QsAAGRzge7Hzo678.jpg" width="100%"/></div>
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
                <section id="tab">
                {/* <Carousel afterChange={this.onChange}> */}
                    <div id="tab-list">
                    <figure><img src="//media.china-sss.com/img/M00/00/0D/wKjFbFp8Fe-AXlfNAAA9uJ9GsC4763.png" alt=""/>
                    <figcaption>美食</figcaption>
                    </figure>
                    <figure><img src="//media.china-sss.com/img/M00/00/0D/wKjFbFp8Fe-AXlfNAAA9uJ9GsC4763.png" alt=""/>
                        <figcaption>美食</figcaption>
                    </figure>
                    <figure><img src="//media.china-sss.com/img/M00/00/0D/wKjFbFp8Fe-AXlfNAAA9uJ9GsC4763.png" alt=""/>
                        <figcaption>美食</figcaption>
                    </figure>
                    <figure><img src="//media.china-sss.com/img/M00/00/0D/wKjFbFp8Fe-AXlfNAAA9uJ9GsC4763.png" alt=""/>
                        <figcaption>美食</figcaption>
                    </figure>
                    <figure><img src="//media.china-sss.com/img/M00/00/0D/wKjFbFp8Fe-AXlfNAAA9uJ9GsC4763.png" alt=""/>
                        <figcaption>美食</figcaption>
                    </figure>
                    <figure><img src="//media.china-sss.com/img/M00/00/0D/wKjFbFp8Fe-AXlfNAAA9uJ9GsC4763.png" alt=""/>
                    <figcaption>美食</figcaption>
                    </figure>
                    <figure><img src="//media.china-sss.com/img/M00/00/0D/wKjFbFp8Fe-AXlfNAAA9uJ9GsC4763.png" alt=""/>
                        <figcaption>美食</figcaption>
                    </figure>
                    <figure><img src="//media.china-sss.com/img/M00/00/0D/wKjFbFp8Fe-AXlfNAAA9uJ9GsC4763.png" alt=""/>
                        <figcaption>美食</figcaption>
                    </figure>
                    <figure><img src="//media.china-sss.com/img/M00/00/0D/wKjFbFp8Fe-AXlfNAAA9uJ9GsC4763.png" alt=""/>
                        <figcaption>美食</figcaption>
                    </figure>
                    <figure><img src="//media.china-sss.com/img/M00/00/0D/wKjFbFp8Fe-AXlfNAAA9uJ9GsC4763.png" alt=""/>
                        <figcaption>美食</figcaption>
                    </figure>
                    </div>
                    <div id="tab-list">

                    </div>
                {/* </Carousel> */}
                </section>
            </div>
        )
    }
}

