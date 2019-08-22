import React, { Component } from "react";
import SalesOrderUi from "./salesOrderUi";
import {connect}  from "react-redux"
import { Link } from "react-router-dom";

class SalesOrderState extends Component {
    state = {
         orders:[]
    }
    componentDidMount(){
        this.setState({
            orders:this.props.orders
        })
    }
    render() {
        return (
            <div >
                <Link to="/dashboard/sales/createorder"> Create dummy order</Link>
                <SalesOrderUi orders={this.state.orders} />
            </div>
        )
    }
}
const mapStateToProps = store => ({
    orders: store.OrderList.orders
  });
export default connect(mapStateToProps)(SalesOrderState);
