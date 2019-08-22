import { Table, Input } from 'antd';
import React, { Component } from "react"
import {Link, withRouter} from "react-router-dom";

const columns = [
    {
        title: 'Shipments',
        dataIndex: '',
    },
    {
        title: 'Ship Data',
        dataIndex: '',
    },
    {
        title: 'Order',
        dataIndex: '',
    },
    {
        title: 'Order Data',
        dataIndex: '',
    },
    {
        title: 'Ship-to Name',
        dataIndex: '',
    },
    {
        title: 'Total Quantity',
        dataIndex: '',
    },
    {
        title: 'Action',
        dataIndex: '',
    },
];


const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect : (record, selected, selectedRows, nativeEvent) => {
        console.log(record)
    },

    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

class Shipments extends Component {
    render() {
        const data = this.props.orders
        return (
            <div>
                <Table className="sales-order-table" rowSelection={rowSelection}   columns={columns} dataSource={data} />
            </div>
        )
    }
}

export default withRouter(Shipments);

