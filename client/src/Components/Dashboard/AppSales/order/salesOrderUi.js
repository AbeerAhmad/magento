import { Table, Input } from 'antd';
import React, { Component } from "react"
import './salesOrder.css';
import {Link, withRouter} from "react-router-dom";
const Search = Input.Search;

const columns = [
    {
        title: 'id',
        dataIndex: 'key',
    },
    {
        title: 'Purchase Point',
        dataIndex: 'purchasePoint',
    },
    {
        title: 'Purchase Date',
        dataIndex: 'purchaseDate',
    },
    {
        title: 'Bill to Name',
        dataIndex: 'billtoName',
    },
    {
        title: 'Bill to Name',
        dataIndex: 'shiptoName',
    },
    {
        title: 'Grand Total Base',
        dataIndex: 'grandTotalBase',
    },
    {
        title: 'Grand Total Purchase',
        dataIndex: 'grandTotalPurchase',
    },
    {
        title: 'Status',
        dataIndex: 'status',
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

class SalesOrder extends Component {
    handleClick=(e)=>{
        this.props.history.push("/dashboard/sales/orders/"+e.key)
        
    }
    render() {
        const data = this.props.orders
        return (
            <div>
                {/* <Link to="/dashboard/sales/orders/:id">view dummy order</Link> */}
                  <h1 style={{fontSize:24}}>Orders</h1>
                <Search
                    placeholder="search order"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                />
                <Table className="sales-order-table" rowSelection={rowSelection} onRowClick={(e)=>this.handleClick(e)}  columns={columns} dataSource={data} />
            </div>
        )
    }
}

export default withRouter(SalesOrder);



