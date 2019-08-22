import React from "react";
import { Menu } from "antd";
import { Link } from 'react-router-dom';
const AppCategoryMenus = () => {
  return (
    <Menu mode='inline' style={{ height: "100%" }}>
      <Menu.Item><Link to="/dashboard/catalog/products">Products</Link></Menu.Item>
      <Menu.Item>Categories</Menu.Item>
    </Menu>
  );
};

export default AppCategoryMenus;
