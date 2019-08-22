import React, { Component } from "react";
import "./view.css"
class AccountInfo extends Component {
    render() {
        // this.props.order.map(item => {
        //     console.log(item.key)
        // })
        return (
            <div className="vew-inner-container">
                <h1 className="view-account-info">Order &amp; Account Information</h1>
                <div className="order-info-box">
                    <div className="order-no-box">
                        <h1 className="view-order-no">Order # 000000001</h1>
                        <div className="view-order-date">
                            <span>Order Date</span>
                            <span>May 23, 2019, 5:43:04 AM</span>
                        </div>
                        <div className="view-order-date">
                            <span>Order Status</span>
                            <span>Processing</span>
                        </div>
                        <div className="view-order-date">
                            <span>Purchased From</span>
                            <span>Main Website </span>
                        </div>
                    </div>

                    <div className="order-no-box">
                        <h1 className="view-order-no">Account Information</h1>
                        <div className="view-order-date">
                            <span>Customer Name</span>
                            <span>aslam </span>
                        </div>
                        <div className="view-order-date">
                            <span>Email</span>
                            <span>abcd@gmail.com</span>
                        </div>
                        <div className="view-order-date">
                            <span>Customer Group</span>
                            <span>General </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AccountInfo;