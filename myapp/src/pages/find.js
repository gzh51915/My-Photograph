import React, { Component } from 'react'
import { Input, Tooltip } from 'antd'
import { InfoCircleOutlined, UserOutlined ,ArrowLeftOutlined } from '@ant-design/icons'
export default class find extends Component {
    render() {
        return (
            <div>
                <header className="page-head">
                    <a>
                        <i>
                            <ArrowLeftOutlined style={{fontSize:22,color:'#58bc58'}}/>  
                        </i>
                    </a>
                    <h1>目的地</h1>
                </header>
                <section className="top-search">
                    <Input
                        placeholder="按关键词搜索一下"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        suffix={
                            <Tooltip title="Extra information">
                                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                            </Tooltip>
                        }
                    />
                </section>
            </div>
        )
    }
}