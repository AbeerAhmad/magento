import React from 'react';
import { Tabs } from 'antd';
import DrawerTabsData from './Drawer-Tabs-data';
import styles from './products.css';

const TabPane = Tabs.TabPane;
export default class DrawerTabs extends React.Component{
   
    render(){
        const { size } = this.props;
        return(
            <div>
                <Tabs type="card" className="product_tabs">
                    <TabPane tab="Filter" key="2">
                        <DrawerTabsData/>  
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}