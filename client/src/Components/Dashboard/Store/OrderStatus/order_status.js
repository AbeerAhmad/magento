import React,{Component} from 'react';
import './order_status.css';
import {Input,Row,Col,Tooltip,Button} from 'antd';
import {Link} from 'react-router-dom';
import Table from './Table/table'
const Search = Input.Search;

class OrderStatus extends Component{
    render(){
        return(
            <div className = 'orderstatus-head'>
                <Row className = "orderstatuscontent-row">
                    <Col span = {11}  className = 'orderstatuscontent-child-1'><span className = "orderstatuscontent-store-heading">Order Status</span></Col>
                    <Col span = {13} className = 'orderstatuscontent-child-2'>
                        <Search className = 'orderstatuscontent-search' placeholder="Enter a keyword to search" onChange={this.changeHandler}  />
                    </Col>
                </Row>
                <div className = 'orderstatus-create'>
                        <Button size = 'large' type = 'ghost' className = 'orderstatus-btn' >Assign Status to State</Button>
                        <Link to = '/dashboard/store/order_status/create_new'><Button size = 'large'  type = 'primary' className = 'orderstatus-btn'>Create New Order</Button></Link>                   
                </div>
                <Table/>
            </div>
        )
    }
}


export default OrderStatus