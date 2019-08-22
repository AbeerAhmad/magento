import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const AppSaleMenus = props => {
  return (
    <Menu mode='inline'>
      <Menu.Item key='orders'>
        <Link to='/dashboard/sales/orders'>Orders</Link>
      </Menu.Item>
      <Menu.Item key='invoices'>
        <Link to='/dashboard/sales/invoices'>Invoices</Link>
      </Menu.Item>
      <Menu.Item key='shipments'>
      <Link to='/dashboard/sales/shipments'>Shipments</Link>
      </Menu.Item>
      <Menu.Item key='dispatches'>
       <Link to='/dashboard/sales/dispatches'> Dispatches</Link></Menu.Item>
      <Menu.Item key='creditMemos'>Credit Memos</Menu.Item>
      <Menu.Item key='billingAgreements'>
      <Link to='/dashboard/sales/billingagreement'> Billing Agreements</Link>
        </Menu.Item>
      <Menu.Item key='Transactons'>
        <Link to = "/dashboard/sales/transaction">Transactions</Link>
      </Menu.Item>
    </Menu>
  );
};

export default AppSaleMenus;
