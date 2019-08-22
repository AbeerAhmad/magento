import React, { Component } from 'react'
import Header from './Dispatchhead';
import { Button } from 'antd'
import history from './history'



class View extends Component {
    state = {
        details: {}
    }
    componentDidMount() {
        var _id = this.props.match.params.id;
        console.log(_id)

        // var _id = id.toString()

        var options = {
            method: 'POST',
            body: JSON.stringify({ _id }),
            headers: {
                'Content-Type': 'application/json'
            }
        }


        fetch('/store/dispatch/dispatchdetails', options)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    details: json
                })
                console.log(json)
            }


            )
            .catch((error) => { console.log(error) });
    }
    render() {
        const {details}=this.state
        return (
            <div>
                <Header />
                <div style={{ backgroundColor: 'grey' }}>

                    <span style={{ float: 'right', clear: 'right' }}><Button onClick={()=>{this.props.history.push('/dashboard/sales/dispatches')}}>Go Back</Button></span>

                </div>
                <h1 style={{ marginTop: '30px' }}>DISPATCH INFORMATION</h1><hr style={{ color: 'lightgrey' }} />
                <div style={{ marginBottom: '40px', marginTop: '10px' }}>
                    <table style={{ width: '80%' }}>
                        <tbody>
                        <tr style={{ marginBottom: '5px', backgroundColor: 'lightgrey', padding: '300px' }}>
                            <td style={{ padding: '5px' }}>
                                <h4> Carrier Name</h4>
                            </td>
                            <td style={{ width: '400px' }}></td>
                            <td style={{ padding: '5px' }}>
                              {details.carrier}
                        </td>
                        </tr>
                        <tr style={{ marginBottom: '5px' }}>
                            <td style={{ padding: '5px' }}>
                                <h4>Date Created</h4>
                            </td>
                            <td style={{ width: '400px' }}></td>
                            <td style={{ padding: '5px' }}>
                               {details.Current_time}
                        </td>
                        </tr>
                        <tr style={{ marginBottom: '5px', backgroundColor: 'lightgrey', padding: '300px' }}>
                            <td style={{ padding: '5px' }}>
                                <h4> Ready At</h4>
                            </td>
                            <td style={{ width: '400px' }}></td>
                            <td style={{ padding: '5px' }}>
                              {details.ReadyAt}
                        </td>
                        </tr>
                        <tr style={{ marginBottom: '5px' }}>
                            <td style={{ padding: '5px' }}>
                                <h4> Number of Included shipments</h4>
                            </td>
                            <td style={{ width: '400px' }}></td>
                            <td style={{ padding: '5px' }}>
                                {details.NumberOfShipments}
                        </td>
                        </tr>
                        <tr style={{ marginBottom: '5px', backgroundColor: 'lightgrey', padding: '300px' }}>
                            <td style={{ padding: '5px' }}>
                                <h4> Number of Failed shipments</h4>
                            </td>
                            <td style={{ width: '400px' }}></td>
                            <td style={{ padding: '5px' }}>
                                {details.failedShipments}
                        </td>
                        </tr>
                        </tbody>

                    </table>
                </div>
                <h3> Documentation</h3> <hr />
                <p>Dcumentation not available</p>

            </div>
        )
    }
}
export default View