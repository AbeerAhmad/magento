import { Table, Input, Row, Col, Button, Icon } from 'antd';
import React, { Component } from "react"
import '../allUsers.css';
import { Link } from "react-router-dom";
const Search = Input.Search;

const columns = [
  {
    title:"Assigned",
    dataIndex:"assigned"
  },
  {
    title: 'Role',
    dataIndex: 'userRole',
    width: "80%"
  }

];


const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows, nativeEvent) => {
    console.log(record)
  },

  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

class SelectUserRole extends Component {
  handleClick = (e) => {
    console.log("this click in me" + e.target)
  }
  handleRoute = () => {
    // console.log();
    this.props.history.push("/dashboard/setting/user/edituser");
  }
  render() {
    // const data = this.props.orders
    const data = [
      {
        key: "moderator",
        assigned:<input type="radio" name="userRole" value="Moderator"/>,
        userRole: "Moderator"
      },
      {
        key: "admin",
        assigned:<input type="radio" name="userRole" value="Administrator" />,
        userRole: "Administrator"
      }

    ]
    var style = {
      inner_head_div: {
        borderTop: "1px solid gray",
        borderBottom: "1px solid gray",
        padding: "15px 30px",
        margin: "35px 0",
        textAlign: "right",
        background: "#e0e0e0"
      },
      inner_head_h3: {
        display: "inline-block",
        padding: "10px",
        margin: "0 10px"
      }
    }
    return (
      <div>
        <h1 style={{ fontSize: 24 }}>User Roles</h1>
        {/* <div style={style.inner_head_div}>
          <Link to="/dashboard/setting/allusers"><h3 style={style.inner_head_h3} ><Icon type="arrow-left" />&nbsp;&nbsp;Back</h3></Link>
          <Link><h3 style={style.inner_head_h3} >Reset</h3></Link>
          <Button type="primary">Save User</Button>
        </div> */}
        

        <Table className="sales-order-table"  columns={columns} dataSource={data} />
        <Row>
          <Col span={4} offset={10}>
          <Button type="primary">Save User</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default SelectUserRole;