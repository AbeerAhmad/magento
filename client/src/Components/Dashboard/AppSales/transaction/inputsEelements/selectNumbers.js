import React, { Component } from 'react';
// import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Select } from 'antd';





class SelectNumbers extends Component {
    
   handleChange=(evt)=>{
    this.props.itemNumber(evt)
  }
  

  
  
  render(){
        const { Option, } = Select;

      

        return(

            <Select defaultValue="30" style={{ width: 100 }} onChange={this.handleChange}>
           
              <Option value="20">20</Option>
              <Option value="50">50</Option>
               <Option value="100">100</Option>
              <Option value="200">200</Option>
           
          </Select>
        )
    }
}

export default SelectNumbers


