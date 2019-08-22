import React, { Component } from "react";

class PaymentMethod extends Component {
    render() {
        return (
            <div className="vew-inner-container">
                <h1 className="view-account-info">Payment &amp; Shipping Method</h1>
                <div className="order-info-box">
                    <div className="order-no-box">
                        <h1 className="view-order-no">Payment Information </h1>
                        <div>Check / Money order</div>
                        <div>The order was placed using USD.</div>
                    </div>

                    <div className="order-no-box">
                        <h1 className="view-order-no">Shipping &amp; Handling Information </h1>
                        <div><b>Flat Rate - Fixed</b> $10.00</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PaymentMethod;