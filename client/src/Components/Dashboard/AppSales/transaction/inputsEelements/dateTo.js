import React, { Component } from 'react';
import "antd/dist/antd.css";
import { DatePicker } from "antd";


class DateTopicked  extends Component {
   
  handleChange=(evt)=> {
    this.props.dategetTo (evt);
 }
 
  render(){

   

        return(
            <div>
            <DatePicker placeholder="to" onChange={this.handleChange} />
           
          </div>
        )
    }
}
export default DateTopicked;