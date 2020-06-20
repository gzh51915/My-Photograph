import React, { Component } from 'react'
import {Tabs,Radio} from 'antd'

const { TabPane } = Tabs;

export default class list2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          mode: 'left',
        };
      }
      render() {
        const { mode } = this.state;
        return (
          <div>
            
            <Tabs defaultActiveKey="0" tabPosition={mode} style={{ height: 400 }}>
              {[...Array(30).keys()].map(i => (
                <TabPane tab={`Tab-${i}`} key={i}>
                  Content of tab {i}
                </TabPane>
              ))}
            </Tabs>
          </div>
        );
      }
}

