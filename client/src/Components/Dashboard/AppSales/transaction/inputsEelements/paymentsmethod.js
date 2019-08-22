
import React, { Component } from 'react';
// import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Select } from 'antd';





class PaymentSelect extends Component {


   handleChange=(evt)=> {
    this.props.onPaymenMethod(evt)
  }


    render(){
        const { Option, OptGroup } = Select;

       
          


        return(

            <Select defaultValue="Authorize.Net" style={{ width: 200 }} onChange={this.handleChange}>
            <Option value="Authorize.Net">Authorize.Net</Option>
            <Option value="BrainTree">BrainTree</Option>
              <Option value="Klarna">Klarna</Option>
            <OptGroup label="Off line Payment Methods">
              <Option value="check/money Order">check/money Order</Option>
              <Option value="No payment Information require">No payment Information require</Option>
            </OptGroup>
            <OptGroup label="Paypal">
              <Option value="Paypal billing agreement">Paypal billing agreement</Option>
            
            </OptGroup>
          </Select>
        )
    }
}

export default PaymentSelect


// const { Option, OptGroup } = Select;

// function handleChange(value) {
//   console.log(`selected ${value}`);
// }

// ReactDOM.render(
//   <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
//     <OptGroup label="Manager">
//       <Option value="jack">Jack</Option>
//       <Option value="lucy">Lucy</Option>
//     </OptGroup>
//     <OptGroup label="Engineer">
//       <Option value="Yiminghe">yiminghe</Option>
//       <Option value="naeem">naeem</Option>
//     </OptGroup>
//   </Select>,
//   document.getElementById('container'),
// );
     

