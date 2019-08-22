import React from "react";
import { Menu } from "antd";

const AppFeatureMenu = () => {
  return (
    <Menu style={{ width: 256 }} defaultOpenKeys={["sub1"]} mode='inline'>
      <Menu.SubMenu key='sub1' title='Promotions'>
        <Menu.Item key='1'>Catalog Price Rule</Menu.Item>
        <Menu.Item key='2'>Cart Price Rules</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key='sub2' title='Communications'>
        <Menu.Item key='3'>Email Templates</Menu.Item>
        <Menu.Item key='4'>Newsletter Template</Menu.Item>
        <Menu.Item key='5'>Newsletter Queue</Menu.Item>
        <Menu.Item key='6'>Newsletter Subscribers</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key='sub3' title='Social'>
        <Menu.Item key='7'>Connect to Facebook</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key='sub4' title='SEO & Search'>
        <Menu.Item key='8'>URL Rewrites</Menu.Item>
        <Menu.Item key='9'>Search Terms</Menu.Item>
        <Menu.Item key='10'>Search Synonyms</Menu.Item>
        <Menu.Item key='11'>Site Map</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key='sub5' title='User Content'>
        <Menu.Item key='12'>Reviews</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key='sub6' title='Marketing Automation'>
        <Menu.Item key='13'>Automation Studio</Menu.Item>
        <Menu.Item key='14'>Exclusion Rules</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default AppFeatureMenu;
