import React from "react";
import {Menu} from 'antd'
import {Link} from 'react-router-dom'

const AppSetingMenus = () => {
  return (
    <Menu mode='inline'>
    <Menu.Item key='allusers'>
      <Link to='/dashboard/setting/allusers'>All Users</Link>
    </Menu.Item>
    {/* <Menu.Item key='lockedusers'>
      <Link to='/dashboard/setting/lockedusers'>Locked Users </Link>
    </Menu.Item> */}
    <Menu.Item key='userroles'>
      <Link to='/dashboard/setting/userroles'>User Roles </Link>
    </Menu.Item>
    
  </Menu>
  );
};

export default AppSetingMenus;
