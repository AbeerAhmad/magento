import React, { Component } from "react";
import { Tabs } from 'antd';
import Information from "./Information";
import Invoice from "./Invoice";
import Shipment from "./Shipment";
import {connect}  from "react-redux"

const { TabPane } = Tabs;

// function callback(key) {
//     console.log(key);
// }


class ViewOrder extends Component {

    state = {
        orders:[]
   }
   componentDidMount(){
       this.setState({
           orders:this.props.orders
       })
   }
    render() {
        const order = this.state.orders.filter( order => {
          return  order.key === this.props.match.params.key
        } )
        // const a = this.state.orders.filter( order !== this.props.match.params.key )
        // console.log(order)
        return (

            <Tabs defaultActiveKey="1">
                <TabPane tab="Information" key="1">
                   <Information  order={order}/>
              </TabPane>
                <TabPane tab="Invoices" key="2">
                   <Invoice />
                </TabPane>
                <TabPane tab="Shipments" key="3">
                    <Shipment />
                </TabPane>
            </Tabs> 
)
    }
}
const mapStateToProps = store => ({
    orders: store.OrderList.orders
  });
export default connect(mapStateToProps)(ViewOrder);
