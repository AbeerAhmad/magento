import React, { Component } from 'react'
import './dispatch.css'
import { Table, Input, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'
import { Select, Icon } from 'antd';
// import history from '../../../../history/history';
import history from './history'
import Header from './Dispatchhead';



const columns = [
    {
        title: 'Created at',
        dataIndex: 'Current_time',

    },
    {
        title: 'Location',
        dataIndex: 'location',

    },
    {
        title: 'Carrier',
        dataIndex: 'carrier',
    },
    {
        title: 'Ready At',
        dataIndex: 'ReadyAt',
    },
    {
        title: 'Total Shipments',
        dataIndex: 'NumberOfShipments',
    },


    {
        title: 'Failed Shipments',

        dataIndex: 'failedShipments',
    },
    {
        title: 'Status',

        dataIndex: 'Status',
    },

    {
        title: 'Actions',

        dataIndex: 'actions',
        render: (text, record) => (
            <Link to={'/dashboard/dispatch/dispatchDetails/' + record._id}>View</Link>
        )
    },


];

class Dispatches extends Component {
    constructor() {
        super();

        this.state = {
            dumydata: [

            ]
        }
    }

    componentWillMount() {
        fetch('/store/dispatch/alldispatch')
            .then(res => res.json())
            .then(json => {

                // this.setState({ progress: false })
                this.setState({
                    dumydata: json,

                })

                console.log(json)
            })


            .catch(error => {
                console.log('Error:', error)
                // this.setState({ progress: false })
            });
    }


    render() {



        const { dumydata } = this.state



        return (
            <div>
                <div style={{ width: '100%', }}> <Link style={{ float: "right" }} to={'/dashboard/sales/dispatches/createdispatch'}><Button  >Create Dispatch</Button></Link></div>
                <Header/>
                <div>

                    <Table className='transaction-table' pagination={{position:'top',defaultPageSize:'5'}} rowKey={record => record._id} columns={columns} dataSource={dumydata} bordered />
                </div>
            </div>
        )
    }


}
export default Dispatches




