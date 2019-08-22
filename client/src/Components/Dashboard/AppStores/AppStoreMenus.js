import React from "react";
import { Menu } from "antd";
import {Link} from 'react-router-dom'

const AppStoreMenus = () => {
  return (
    <Menu style={{ width: 256 }} defaultOpenKeys={["sub1"]} mode='inline'>
      <Menu.SubMenu key='sub1' title='Settings'>
        <Menu.Item key='1'>
          <Link to = '/dashboard/store/all_stores'>All Stores</Link>
        </Menu.Item>
        <Menu.Item key='2'>Configuration</Menu.Item>
        <Menu.Item key='4'>Terms & Conditions</Menu.Item>
        <Menu.Item key='5'>
          <Link to = '/dashboard/store/order_status'>Order Status</Link>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key='sub2' title='Taxes'>
        <Menu.Item key='6'>Tax Rules</Menu.Item>
        <Menu.Item key='7'>Tax Zones and Rates</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key='sub3' title='Currency'>
        <Menu.Item key='8'>Currency Rate</Menu.Item>
        <Menu.Item key='9'>Currency Symbols</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key='sub4' title='Attributes'>
        <Menu.Item key='10'>Product</Menu.Item>
        <Menu.Item key='11'>Attribute Set</Menu.Item>
        <Menu.Item key='12'>Rating</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key='sub4' title='Shipping'>
        <Menu.Item key='13'>Carriers</Menu.Item>
        <Menu.Item key='14'>Location</Menu.Item>
        <Menu.Item key='15'>Packaging</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default AppStoreMenus;
