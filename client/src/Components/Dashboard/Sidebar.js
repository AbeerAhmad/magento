import React from "react";
import { Menu, Icon } from "antd";
const Sidebar = props => (
  <Menu
    mode='horizontal'
    onSelect={({ key }) => props.changeProfRoute(key)}
    style={{ lineHeight: "64px" }}
    theme='dark'
    defaultSelectedKeys={["appDashboard"]}
  >
    <Menu.Item key='appDashboard'>
      <Icon type='dashboard' />
    </Menu.Item>
    <Menu.Item key='appSales' onClick={props.openDrawer}>
      <Icon type='dollar' />
    </Menu.Item>
    <Menu.Item key='appCategories' onClick={props.openDrawer}>
      <Icon type='file-search' />
    </Menu.Item>
    <Menu.Item key='appAccounts' onClick={props.openDrawer}>
      <Icon type='user' />
    </Menu.Item>
    <Menu.Item key='appFeatures' onClick={props.openDrawer}>
      <Icon type='ordered-list' />
    </Menu.Item>
    <Menu.Item key='appTheme' onClick={props.openDrawer}>
      <Icon type='bg-colors' />
    </Menu.Item>
    <Menu.Item key='appStores' onClick={props.openDrawer}>
      <Icon type='appstore' />
    </Menu.Item>
    <Menu.Item key='appLayout' onClick={props.openDrawer}>
      <Icon type='layout' />
    </Menu.Item>
    <Menu.Item key='appReports' onClick={props.openDrawer}>
      <Icon type='fund' />
    </Menu.Item>
    <Menu.Item key='appSettings' onClick={props.openDrawer}>
      <Icon type='setting' />
    </Menu.Item>
  </Menu>
);

export default Sidebar;
