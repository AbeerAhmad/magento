import { Table, Input } from 'antd';
import React, { Component } from "react"
import './allUsers.css';
// import {Link} from "react-router-dom";
const Search = Input.Search;

const columns = [
    {
        title: 'id',
        dataIndex: 'key',
    },
    {
        title: 'User Name',
        dataIndex: 'userName',
    },
    {
        title: 'Last Login',
        dataIndex: 'lastLogin',
    },
    {
        title: 'Failures',
        dataIndex: 'failures',
    },
    {
        title: 'Unlocked',
        dataIndex: 'unlocked',
    },
    
    
];


const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onClick:()=>{
      console.log("hello");
    },
    onSelect : (record, selected, selectedRows, nativeEvent) => {
        console.log(record)
    },

    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

class LockedUsers extends Component {
    handleClick=(e)=>{
        console.log("this click in me" + e.target)
    }
    render() {
        
        const data=[
          { key:0,
          userName:"Zeeshan373",
          lastLogin:"20-March,2019",
          failures:"ip changing",
          unlocked:"False"
        },
        { key:1,
            userName:"Zeeshan373",
            lastLogin:"20-March,2019",
            failures:"ip changing",
            unlocked:"False"
          },
          { key:2,
            userName:"Zeeshan373",
            lastLogin:"20-March,2019",
            failures:"ip changing",
            unlocked:"False"
          }
        

        ]
        
        return (
            <div>
                {/* <Link to="/dashboard/setting/view">Settings</Link> */}
                  <h1 style={{fontSize:24}}>All Users</h1>
                <Search
                    placeholder="search order"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                />
                <Table className="sales-order-table" rowSelection={rowSelection} id="hi"  columns={columns} dataSource={data} />
            </div>
        )
    }
}

export default LockedUsers;
