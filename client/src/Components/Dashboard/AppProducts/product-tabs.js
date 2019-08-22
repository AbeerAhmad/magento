import React from 'react';
import { Tabs } from 'antd';
import TabsData from './tabsData';
import styles from './products.css';

const TabPane = Tabs.TabPane;
export default class PTabs extends React.Component{
   
    render(){
        const { size } = this.props;
        return(
            <div>
                <Tabs type="card" className="product_tabs">
                    <TabPane tab="Filter" key="1">
                        <TabsData/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}