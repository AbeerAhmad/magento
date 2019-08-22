import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const AppCustomerMenus = () => {
  return (
    <Menu mode='inline' style={{ height: "100%" }}>
      <Menu.Item>
        <Link to='/dashboard/customers/all'>All Customers</Link>
      </Menu.Item>

      <Menu.Item>
        <Link to='/dashboard/customers/online'>Now Online</Link>
      </Menu.Item>

      <Menu.Item>
        <Link to='/dashboard/customers/groups'>Customer Groups</Link>
      </Menu.Item>
    </Menu>
  );
};

export default AppCustomerMenus;
