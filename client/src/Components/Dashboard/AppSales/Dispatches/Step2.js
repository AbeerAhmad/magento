import React, { Component } from 'react'
import { Steps, Button, message, DatePicker } from 'antd';

class Second extends Component {


  
    render() {

        return (
            <div>
                <label htmlFor="nofshipments" required style={{ fontWeight: 'bold' }}>Number of shipments</label>
                <input id='nofshipments' type="number" defaultValue={this.props.value} onChange={this.props.Noofshipments} style={{ marginLeft: '5px', marginBottom: '10px' }} min='1' /><br />
                <label htmlFor="Ready_time" required style={{ fontWeight: 'bold' }}>Ready at</label>
                <DatePicker showTime id='Ready_time' placeholder="Select Time" onChange={this.props.onChange} style={{ marginLeft: '40px', marginBottom: '10px' }} />
            </div>
        )
    }
}
export default Second