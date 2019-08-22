
import React, { Component } from 'react';
// import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Select } from 'antd';





class TransactionType extends Component {
  handleChange = (evt) => {

    this.props.onTransactionSelection(evt);

  }
  render() {
    const { Option, } = Select;





    return (

      <Select defaultValue="Order" style={{ width: 100 }} onChange={this.handleChange}>

        <Option value="Authorization">Authorization</Option>
        <Option value="Capture">Capture</Option>
        <Option value="Void">Void</Option>
        <Option value="Refund">Refund</Option>
        <Option value="fund">fund</Option>
        <Option value="check">check</Option>
      </Select>
    )
  }
}

export default TransactionType


