import React, { Component } from "react";
import { Table } from 'antd';

const columns = [
    {
        title: 'Product',
        dataIndex: 'name',
    },
    {
        title: 'Item Status',
        dataIndex: 'age',
    },
    {
        title: 'Original Price',
        dataIndex: 'address',
    },
    {
        title: 'Qty',
        dataIndex: 'address',
    },
    {
        title: 'Subtotal',
        dataIndex: 'address',
    },
    {
        title: 'Tax Amount',
        dataIndex: 'address',
    },
    {
        title: 'Tax Percent',
        dataIndex: 'address',
    },
    {
        title: 'Discount Amount',
        dataIndex: 'address',
    },
    {
        title: 'Row Total',
        dataIndex: 'address',
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },

];

class ItemsOrder extends Component {
    render() {
        return (
            <div>
                <h1 className="view-account-info">Items Ordered</h1>
                <Table className="item-order-table" columns={columns} dataSource={data} size="middle" />
            </div>
        )
    }
}
export default ItemsOrder;
