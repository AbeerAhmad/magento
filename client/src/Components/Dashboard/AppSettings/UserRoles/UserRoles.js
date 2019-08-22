import { Table, Input, Row, Col, Button, Select } from 'antd';
import React, { Component } from "react"
import '../allUsers.css';
import { Link } from "react-router-dom";
const Search = Input.Search;
const { Option } = Select;

const columns = [
  {
    title: 'id',
    dataIndex: 'key',
  },
  {
    title: 'Role',
    dataIndex: 'userRole',
    width: "50%"
  }

];


const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onRow: () => {
    alert("hi");
  },
  onSelect: (record, selected, selectedRows, nativeEvent) => {
    console.log(record)
  },

  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

class UserRoles extends Component {


  state = {
    key: "",
    userRole: ""
  }

  handleClick = (e) => {
    console.log("this click in me" + e.target)
  }
  handleRoute = () => {
    // console.log();
    this.props.history.push("/dashboard/setting/user/edituser");
  }
  render() {
    // const data = this.props.orders
    const inputFields = [
      {
        key: <Input onChange={(e) => { this.setState({ key: e.target.value.toLowerCase() }) }} />,
        userRole: <Input onChange={(e) => { this.setState({ userRole: e.target.value.toLowerCase() }) }} />
      }
    ]
    const data = [
      {
        key: "0",
        userRole: "Admin"
      },
      {
        key: "1",
        userRole: "Moderator"
      }

    ];
    
    let fData = data.filter(
      (value) => {
        return value.key.toLowerCase().includes(this.state.key)
          && value.userRole.toLowerCase().includes(this.state.userRole)
      }

    );

    return (
      <div>

        <h1 style={{ fontSize: 24 }}>User Roles</h1>
        <Row>
          <Col span={8}>
            <Search
              placeholder="Search Role"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
          </Col>
          <Col span={10}>

          </Col>
          <Col span={6}>
            <Link to="/dashboard/setting/roles/adduserrole"><Button type="primary">Add new Role</Button></Link>
          </Col>
        </Row>

        <Table className="sales-order-table" rowSelection={rowSelection} columns={columns} dataSource={[...inputFields, ...fData]} />
      </div>
    )
  }
}

export default UserRoles;