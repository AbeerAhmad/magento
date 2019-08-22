import React, { Component } from "react";
import AccountInfo from "./accountInfo"
import AdressInfo from "./adressInfo";
import PaymentMethod from "./PaymentMethod";
import ItemsOrder from "./itemsOrder";
import OrderTotal from "./orderTotal";

class Information extends Component{
    render(){

        return(
            <div>
                <AccountInfo order= {this.props.order} />
                <AdressInfo />
                <PaymentMethod />
                <ItemsOrder />
                <OrderTotal />
            </div>
        )
    }
}
export default Information;