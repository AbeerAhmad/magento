
import React, { Component } from 'react';
// import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Select } from 'antd';





class Close extends Component {
    
   handleChange=(evt)=> {
   this.props.cloded(evt)
  }
  
  render(){
        const { Option, OptGroup } = Select;

      


        return(

            <Select defaultValue="Yes" style={{ width: 70 }} onChange={this.handleChange}>
            
              <Option value="yes">Yes</Option>
              <Option value="No">No</Option>
       
          
          </Select>
        )
    }
}

export default Close




