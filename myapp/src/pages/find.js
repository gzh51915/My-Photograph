import React, { Component } from 'react'
import { Input, Tooltip } from 'antd'
import { InfoCircleOutlined, UserOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import { Carousel } from 'antd'
import { Tabs } from 'antd';
import '../css/find.css'

const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}


export default class find extends Component {
    render() {
        return (
            <div className="find">
                <header className="page-head">
                    <a>
                        <i>
                            <ArrowLeftOutlined style={{ fontSize: 22, color: '#58bc58' }} />
                        </i>
                    </a>
                    <h1>发现</h1>
                </header>
                <section className="top-search">
                    <Input
                        placeholder="按关键词搜索一下"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        suffix={
                            <Tooltip title="Extra information">
                                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                            </Tooltip>
                        }
                    />
                </section>
                {/* 轮播图 */}
                <Carousel autoplay>
                    <div>
                        <img className="lunbo"
                            src="//media.china-sss.com/img/M00/05/9F/wKjFbF5gZQmAMcEGAAEeP9Ia8qc752.jpg "
                            alt
                        />
                    </div>
                    <div>
                        <h3><img
                            src="//media.china-sss.com/img/M00/05/9E/wKjFbF5cb_aAFoPJAAG33rqbaDg828.jpg "
                            alt
                        /></h3>
                    </div>
                    <div>
                        <h3><img
                            src="//media.china-sss.com/img/M00/05/9E/wKjFbF5LUbeAA_sfAAEy1MXf2CU925.jpg "
                            alt
                        /></h3>
                    </div>
                    <div>
                        <h3><img
                            src="//media.china-sss.com/img/M00/05/2F/wKjFbF14vTuALnVmAAGcVhXANvk112.jpg "
                            alt
                        /></h3>
                    </div>
                    <div>
                        <h3><img
                            src="//media.china-sss.com/img/M00/05/67/wKjFbF3U0a-AOBK2AAcUJNVqakw650.png "
                            alt
                        /></h3>
                    </div>
                    <div>
                        <h3><img
                            src="//media.china-sss.com/img/M00/05/67/wKjFbF3U0NqAOWWtAAHkgPV9OPo325.jpg "
                            alt
                        /></h3>
                    </div>
                </Carousel>
                {/* 标签页 */}

                <Tabs defaultActiveKey="2" onChange={callback}>
                    <TabPane tab="最新" key="2">
                        <ul className="fot">
                            <li>
                                <p className="txt">比肩莫干山,安吉,千岛湖！这个屡上央视的周边景区美绝了！</p>
                                <p><img
                                    src="//media.china-sss.com/img/M00/05/67/wKjFbF3U0NqAOWWtAAHkgPV9OPo325.jpg "
                                    alt=""
                                /></p>
                                <i className="qiu">
                                    小秋推荐
                                </i>
                                <div className="foot">
                                    <div className="foot1">
                                        <img
                                            src="https://media.china-sss.com/img/M00/04/65/wKjFbFx4voKASVWNAAGvHh4IL7s229.png.100x100.jpg"
                                        />
                                    春小秋
                                    </div>
                                </div>
                            </li>
                            <li>
                                <p className="txt">比肩莫干山,安吉,千岛湖！这个屡上央视的周边景区美绝了！</p>
                                <p><img
                                    src="//media.china-sss.com/img/M00/05/9E/wKjFbF5cb_aAFoPJAAG33rqbaDg828.jpg "
                                    alt=""
                                /></p>
                                <i className="qiu">
                                    小秋推荐
                                </i>
                                <div className="foot">
                                    <div className="foot1">
                                        <img
                                            src="https://media.china-sss.com/img/M00/04/65/wKjFbFx4voKASVWNAAGvHh4IL7s229.png.100x100.jpg"
                                        />
                                    春小秋
                                    </div>
                                </div>
                            </li>
                            <li>
                                <p className="txt">比肩莫干山,安吉,千岛湖！这个屡上央视的周边景区美绝了！</p>
                                <p><img
                                    src="//media.china-sss.com/img/M00/05/67/wKjFbF3U0NqAOWWtAAHkgPV9OPo325.jpg "
                                    alt=""
                                /></p>
                                <i className="qiu">
                                    小秋推荐
                                </i>
                                <div className="foot">
                                    <div className="foot1">
                                        <img
                                            src="https://media.china-sss.com/img/M00/04/65/wKjFbFx4voKASVWNAAGvHh4IL7s229.png.100x100.jpg"
                                        />
                                    春小秋
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </TabPane>
                    <TabPane tab="达人游记" key="3">
                    <li>
                                <p className="txt">比肩莫干山,安吉,千岛湖！这个屡上央视的周边景区美绝了！</p>
                                <p><img
                                    src="//media.china-sss.com/img/M00/05/67/wKjFbF3U0NqAOWWtAAHkgPV9OPo325.jpg "
                                    alt=""
                                /></p>
                                <i className="qiu">
                                    小秋推荐
                                </i>
                                <div className="foot">
                                    <div className="foot1">
                                        <img
                                            src="https://media.china-sss.com/img/M00/04/65/wKjFbFx4voKASVWNAAGvHh4IL7s229.png.100x100.jpg"
                                        />
                                    春小秋
                                    </div>
                                </div>
                            </li>
                            <li>
                                <p className="txt">比肩莫干山,安吉,千岛湖！这个屡上央视的周边景区美绝了！</p>
                                <p><img
                                    src="//media.china-sss.com/img/M00/05/67/wKjFbF3U0NqAOWWtAAHkgPV9OPo325.jpg "
                                    alt=""
                                /></p>
                                <i className="qiu">
                                    小秋推荐
                                </i>
                                <div className="foot">
                                    <div className="foot1">
                                        <img
                                            src="https://media.china-sss.com/img/M00/04/65/wKjFbFx4voKASVWNAAGvHh4IL7s229.png.100x100.jpg"
                                        />
                                    春小秋
                                    </div>
                                </div>
                            </li>
                            <li>
                                <p className="txt">比肩莫干山,安吉,千岛湖！这个屡上央视的周边景区美绝了！</p>
                                <p><img
                                    src="//media.china-sss.com/img/M00/05/67/wKjFbF3U0NqAOWWtAAHkgPV9OPo325.jpg "
                                    alt=""
                                /></p>
                                <i className="qiu">
                                    小秋推荐
                                </i>
                                <div className="foot">
                                    <div className="foot1">
                                        <img
                                            src="https://media.china-sss.com/img/M00/04/65/wKjFbFx4voKASVWNAAGvHh4IL7s229.png.100x100.jpg"
                                        />
                                    春小秋
                                    </div>
                                </div>
                            </li>
                    </TabPane>
                    <TabPane tab="官方推荐" key="1">
                    <li>
                                <p className="txt">比肩莫干山,安吉,千岛湖！这个屡上央视的周边景区美绝了！</p>
                                <p><img
                                    src="//media.china-sss.com/img/M00/05/67/wKjFbF3U0NqAOWWtAAHkgPV9OPo325.jpg "
                                    alt=""
                                /></p>
                                <i className="qiu">
                                    小秋推荐
                                </i>
                                <div className="foot">
                                    <div className="foot1">
                                        <img
                                            src="https://media.china-sss.com/img/M00/04/65/wKjFbFx4voKASVWNAAGvHh4IL7s229.png.100x100.jpg"
                                        />
                                    春小秋
                                    </div>
                                </div>
                            </li>
                            <li>
                                <p className="txt">比肩莫干山,安吉,千岛湖！这个屡上央视的周边景区美绝了！</p>
                                <p><img
                                    src="//media.china-sss.com/img/M00/05/67/wKjFbF3U0NqAOWWtAAHkgPV9OPo325.jpg "
                                    alt=""
                                /></p>
                                <i className="qiu">
                                    小秋推荐
                                </i>
                                <div className="foot">
                                    <div className="foot1">
                                        <img
                                            src="https://media.china-sss.com/img/M00/04/65/wKjFbFx4voKASVWNAAGvHh4IL7s229.png.100x100.jpg"
                                        />
                                    春小秋
                                    </div>
                                </div>
                            </li>
                            <li>
                                <p className="txt">比肩莫干山,安吉,千岛湖！这个屡上央视的周边景区美绝了！</p>
                                <p><img
                                    src="//media.china-sss.com/img/M00/05/67/wKjFbF3U0NqAOWWtAAHkgPV9OPo325.jpg "
                                    alt=""
                                /></p>
                                <i className="qiu">
                                    小秋推荐
                                </i>
                                <div className="foot">
                                    <div className="foot1">
                                        <img
                                            src="https://media.china-sss.com/img/M00/04/65/wKjFbFx4voKASVWNAAGvHh4IL7s229.png.100x100.jpg"
                                        />
                                    春小秋
                                    </div>
                                </div>
                            </li>
                  </TabPane>
                </Tabs>

            </div>
        )
    }
}