import React, { Component } from 'react';
import './transaction.css'
import { Table, Input, Row, Col, Button } from 'antd';
import { Select, Icon } from 'antd';
import PaymentSelect from './inputsEelements/paymentsmethod'
import TransactionType from './inputsEelements/transationType'
import Close from './inputsEelements/closed'
import DateFromPiked from './inputsEelements/date'
import DateTopicked from './inputsEelements/dateTo'
import SelectNumbers from './inputsEelements/selectNumbers'
import 'antd/dist/antd.css';
import { filterOption } from 'rc-mentions/lib/util';
import moment from 'moment';

class Transction extends Component {
    state = {
        size: 'medium'
    }
    numbers = (evt) => {
        alert(evt)
    }
    render() {
        return (
            <div>




                <Row >
                    <Col span={12} >
                        <h1 className="transaction_heading">Transactions</h1>

                    </Col>

                </Row>

                <div className="mainheader"  >

                    <Row >
                        <Col span={14}  className="leftButton" >
                            <button className="serch">Search</button>
                            <span className="reset" >Reset Filter</span>

                            <span className="record" >  0 records found</span>

                        </Col>
                        <Col span={10}  className="rightbuutons" >
                            <span ><SelectNumbers itemNumber={this.numbers} /></span>
                            <span style={{ padding: "17px" }} >per page</span>



                            <button className="arrowButton" > <Icon type="left" /></button>

                            <input className="pagesInput" />
                            <span > of 1 </span>
                            <button className="arrowButton"><Icon type="right" /></button>
                        </Col>
                    </Row>

                    <SalesOrder />


                </div>
            </div>

        )
    }
}
export default Transction

const columns = [
    {
        title: 'ID',
        dataIndex: 'name',

    },
    {
        title: 'Order ID',
        dataIndex: 'order',

    },
    {
        title: 'Transction ID',
        dataIndex: 'TransId',
    },
    {
        title: 'Parent Transction ID',
        dataIndex: 'parentTranasaction',
    },
    {
        title: 'Payment Method',
        dataIndex: 'method',
    },


    {
        title: 'Transction Type',

        dataIndex: 'transaction',
    },
    {
        title: 'Closed',

        dataIndex: 'colose',
    },

    {
        title: 'Created',

        dataIndex: 'creat',
    },


];
const data = [
    // {

    //     name: <input placeholder="From" />,
    //     age: <input />,
    //     address: <input />,
    //     method: <PaymentSelect />,
    //     transaction: <TransactionType />,
    //     colose: <Close />,
    //     creat: <DatePiked />
    // },
    {

        name: <input placeholder="to" />,
        creat: <DateTopicked />

    },



];



class SalesOrder extends Component {
    constructor() {
        super();
        this.state = {
            dumydata: [
                {
                    id: "1",
                    orderId: '01',
                    TransactionId: '001',
                    ParentTransactionId: '0001',
                    PaymentMethod: "Authorize.Net",
                    TransactionType: "Authorization",
                    Closed: "no",
                    date: "Sun Jun 01 2019 16:32:52 GMT+0500"

                },
                {
                    id: "1",
                    orderId: '01',
                    TransactionId: '0013333',
                    ParentTransactionId: '0001',
                    PaymentMethod: "Authorize.Net",
                    TransactionType: "Authorization",
                    Closed: "no",
                    date: "Sun Jun 02 2019 16:32:52 GMT+0500"

                },
                {
                    id: "2",
                    orderId: '02',
                    TransactionId: '002',
                    ParentTransactionId: '0002',
                    PaymentMethod: "BrainTree",
                    TransactionType: "Capture",
                    Closed: "yes",
                    date:  "Sun Jun 03 2019 16:32:52 GMT+0500"
                },
                {
                    id: "3",
                    orderId: '03',
                    TransactionId: '003',
                    ParentTransactionId: '0003',
                    PaymentMethod: "Klarna",
                    TransactionType: "Void",
                    Closed: "no",
                    date:  "Sun Jun 04 2019 16:32:52 GMT+0500"
                },
                {
                    id: "4",
                    orderId: '04',
                    TransactionId: '004',
                    ParentTransactionId: '0004',
                    PaymentMethod: "check/money Order",
                    TransactionType: "Refund",
                    Closed: "yes",
                    date:  "Sun Jun 05 2019 16:32:52 GMT+0500"
                },
                {
                    id: "5",
                    orderId: '05',
                    TransactionId: '005',
                    ParentTransactionId: '0005',
                    PaymentMethod: "No payment Information require",
                    TransactionType: "fund",
                    Closed: "no",
                    date: "Sun Jun 06 2019 16:32:52 GMT+0500"

                },
                {
                    id: "6",
                    orderId: '06',
                    TransactionId: '006',
                    ParentTransactionId: '0006',
                    PaymentMethod: "Paypal billing agreement",
                    TransactionType: "check",
                    Closed: "yes",
                    date:  "Sun Jun 07 2019 16:32:52 GMT+0500"
                },
            ]
        }
    }



    updateSearch = (evt) => {

        let search = evt;

        if (typeof evt == 'object') {
            if (evt.target) {
                search = evt.target.value;
            } 
            //else {
              //  let date = evt.toString()
                //search = date;
                // let dB = this.state.dateFrom
                // let Dto = this.state.dateTo
                // var isAfter = moment(dB).isAfter(Dto);
                // console.log(isAfter)
           // }
        } else {
            search = evt;
        }
        this.setState({
            search: search
        })


    }

    render() {



        let transformedData = data[0] = {
            TransId: <input onChange={this.updateSearch} />,
            name: <input placeholder="from" onInput={(evt) => {
                this.setState({ fromID: evt.target.value })
            }} />,
            order: <input onChange={this.updateSearch} />,
            parentTranasaction: <input onChange={this.updateSearch} />,

            transaction: <TransactionType onTransactionSelection={this.updateSearch} />,
            method: <PaymentSelect onPaymenMethod={this.updateSearch} />,
            colose: <Close cloded={this.updateSearch} />,
            creat: <DateFromPiked dateget={(evt) => {
                this.setState({
                    dateFrom: evt
                })
            }} />
        };

        let transdata = data[1] = {
            name: <input placeholder="to" onInput={(evt) => {
                this.setState({ toID: evt.target.value })
            }} />,
            creat: <DateTopicked dategetTo={(evt) => {
                this.setState({
                    dateTo:evt
                })
            }} />
        };






        let rangeFilter = this.state.dumydata.filter((item) => {

            if (this.state.dateFrom && this.state.dateTo) {

                return  moment(item.date).add(1, 'days').isAfter(this.state.dateFrom)&&
                moment(item.date.toString()).isBefore(this.state.dateTo)
            }




            if (this.state.fromID && this.state.toID) {
                return item.id >= this.state.fromID && item.id <= this.state.toID;
            } else if (this.state.fromID) {
                return item.id == this.state.fromID;
            } else {
                return true;
            }

            

        });

        let fiteredData = rangeFilter.filter((item) => {

            return this.state.search ?
                item.orderId.includes(this.state.search) ||
                item.TransactionId.includes(this.state.search) ||
                item.ParentTransactionId.includes(this.state.search) ||
                item.PaymentMethod.includes(this.state.search) ||
                item.TransactionType.includes(this.state.search) ||
                item.Closed.includes(this.state.search) ||
                item.date.includes(this.state.search) : true;
        });



        // item.id.includes(this.state.search)


        return (
            <div>
                <Table className = 'transaction-table' columns={columns} dataSource={data.length > 1 ? [transformedData, transdata].concat(data.slice(2)) : [transformedData]} />
                {

                    fiteredData.map((item) => {
                        return (
                            <div>
                                <Row  className="dumyDataShow" justify="start">
                                    <Col   span={3}>{item.id}</Col>
                                    <Col span={3}>{item.orderId}</Col>
                                    <Col span={3}>{item.TransactionId}</Col>
                                    <Col span={3}>{item.ParentTransactionId}</Col>
                                    <Col span={3}>{item.PaymentMethod}</Col>
                                    <Col  className="TransactionType" span={3}>{item.TransactionType}</Col>
                                    <Col className="closed" span={3}>{item.Closed}</Col>
                                    <Col className="date" span={3}>{item.date}</Col>
                                </Row>

                            </div>
                        )
                    })}
            </div>
        )
    }
}

