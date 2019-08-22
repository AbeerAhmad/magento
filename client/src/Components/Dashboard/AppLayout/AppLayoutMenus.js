import React from "react";
import { Menu } from "antd";

const AppLayoutMenus = () => {
  return (
    <Menu mode='inline'>
      <Menu.ItemGroup
        key='g1'
        title='Elements'
        style={{ marginBottom: "50px" }}
      >
        <Menu.Item key='1'>Pages</Menu.Item>
        <Menu.Item key='2'>Blocks</Menu.Item>
        <Menu.Item key='3'>Widgets</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup key='g2' title='Design'>
        <Menu.Item key='4'>Configuration</Menu.Item>
        <Menu.Item key='5'>Themes</Menu.Item>
        <Menu.Item key='6'>Schedule</Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );
};

export default AppLayoutMenus;
