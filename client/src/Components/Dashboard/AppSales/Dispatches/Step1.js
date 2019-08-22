import React, { Component } from 'react'
// import renderEmpty from 'antd/lib/config-provider/renderEmpty';
class First extends Component{
state={
    carriers : [
        '', 'TCS', 'LEOPERD', 'OCS'
    ],
    Locations : [
        '', 'Londonfield Warehouse', 'Chinatown', 'WestEnd WareHouse'
    ],
    Next:false,
}


    render() {
        const {carriers,Locations}=this.state
        return (
            <div>
                <label htmlFor="carrier" ><b> Carrier</b></label>
                <select id='carrier' onChange={this.props.handleCarrier} required style={{ width: '150px', marginLeft: '20px', padding: '5px', marginBottom: '10px' }}>
                    {
                        carriers.map((item, i) => {
                            return <option value={item} key={i} style={{ fontWeight: 'bold' }}>{item}</option>

                        })
                    }
                </select><br />
                <label htmlFor="location" ><b> Location</b></label>
                <select id='location' required onChange={this.props.handleChange} style={{ width: '200', marginLeft: '20px', padding: '5px' }}>
                    {
                        Locations.map((item, i) => {
                            return <option value={item} key={i} style={{ fontWeight: 'bold' }}>{item}</option>

                        })
                    }
                </select>

            </div>
        )
    }
}
export default First