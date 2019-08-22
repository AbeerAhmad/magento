import React, { Component } from "react";
import { ADD_NEW_ORDER } from "../../../../Redux/Actions/orderAction";
import store from "../../../../Redux/store";
import { Redirect } from 'react-router-dom'

class CreateOrder extends Component {
    state = {
        purchasePoint: null,
        purchaseDate: null,
        billtoName: null,
        shiptoName: null,
        grandTotalBase: null,
        grandTotalPurchase: null,
        status: null,

    }
    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    saveOrder = (e)=> {
        e.preventDefault()
        if(this.state.purchasePoint &&this.state.purchaseDate && this.state.billtoName && this.state.shiptoName && this.state.grandTotalBase && this.state.grandTotalPurchase && this.state.status){

        
            store.dispatch(ADD_NEW_ORDER(this.state))
        }
        
    }
    render() {
        return (
            <div>
                <form style={{width:"500px",  }} action="">
                    <input style={{padding:"10px", margin:"10px", }} onChange={this.handleChange} name="purchasePoint" placeholder="Purchase Point" type="text"/>
                    <input style={{padding:"10px", margin:"10px", }} onChange={this.handleChange} name="purchaseDate" placeholder="Purchase Date" type="text"/>
                    <input style={{padding:"10px", margin:"10px", }} onChange={this.handleChange} name="billtoName" placeholder="Bill to Name" type="text"/>
                    <input style={{padding:"10px", margin:"10px", }} onChange={this.handleChange} name="shiptoName" placeholder="Shipp to Name" type="text"/>
                    <input style={{padding:"10px", margin:"10px", }} onChange={this.handleChange} name="grandTotalBase" placeholder="Grand Total Base" type="text"/>
                    <input style={{padding:"10px", margin:"10px", }} onChange={this.handleChange} name="grandTotalPurchase" placeholder="Grand Total Purchase" type="text"/>
                    <input style={{padding:"10px", margin:"10px", }} onChange={this.handleChange} name="status" placeholder="Status" type="text"/>
                    <button onClick={this.saveOrder} style={{padding:"10px", margin:"10px", backgroundColor:"green" }}>create order</button>
                </form>
            </div>
        )
    }
}

export default CreateOrder;