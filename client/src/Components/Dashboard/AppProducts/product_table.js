import React from 'react';
import { Input } from 'antd';
import { Table } from 'antd';
import { Select } from 'antd';
import { stat } from 'fs';
const Option = Select.Option;
const { OptGroup } = Select;

// function handleChange(evt) {
//     evt.preventDefault();
//     let getVal = evt.target.value;
//     console.log(getVal);
// }

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        width: 150,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        width: 150,
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};
const Search = Input.Search;

export default class ProductTable extends React.Component {
    state = {
        value: '100'
    }
    handleChange = (value) => {
        var get=value;
        this.setState({
            value:get
        })
    }
    render() {

        return (
            <div>
                <div className="searchBar">
                    <Search
                        className="srch"
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{ width: 400 }}
                    />
                </div>
                <div className="pagination">
                    <span>Pagination: </span>
                    <Select className="slcter" defaultValue="--- select ---" onChange={this.handleChange.bind(this)}>
                        <Option value="20">20</Option>
                        <Option value="30">30</Option>
                        <Option value="50">50</Option>
                        <Option value="100">100</Option>
                    </Select>
                </div>
                <div className="table">
                    {/* <Table className="product_table" columns={columns} dataSource={data} pagination={{ pageSize: this.state.value }} scroll={{ y: 240 }} /> */}
                    <Table className="product_table" rowSelection={rowSelection} pagination={{pageSize: this.state.value}} columns={columns} dataSource={data} scroll={{y:240}} />
                </div>
            </div>
        );
    }
}