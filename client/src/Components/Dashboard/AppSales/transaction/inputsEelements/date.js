import React, { Component } from 'react';
import "antd/dist/antd.css";
import { DatePicker } from "antd";


class DateFromPiked  extends Component {
  
    
  handleChange=(evt)=> {
     this.props.dateget (evt);
  }
  
  
  
  render(){
     return(
            <div>
            <DatePicker placeholder="from" onChange={this.handleChange} />
           
          </div>
        )
    }
}
export default DateFromPiked;