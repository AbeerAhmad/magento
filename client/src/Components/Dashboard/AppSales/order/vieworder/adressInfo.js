import React, { Component } from "react";
import "./view.css"
class AdressInfo extends Component {
    render() {
        return (
            <div className="vew-inner-container">
                <h1 className="view-account-info">Address Information</h1>
                <div className="order-info-box">
                    <div className="order-no-box">
                        <h1 className="view-order-no">Billing Address </h1>
                        <div>aslam</div>
                        <div>gamica cloud stresst no 1 faisalabad</div>
                        <div>faisalabad, punjab, 38000</div>
                        <div>Pakistan</div>
                        <div>phone: 03217955868</div>
                    </div>

                    <div className="order-no-box">
                        <h1 className="view-order-no">Shipping Address </h1>
                        <div>aslam</div>
                        <div>gamica cloud stresst no 1 faisalabad</div>
                        <div>faisalabad, punjab, 38000</div>
                        <div>Pakistan</div>
                        <div>phone: 03217955868</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AdressInfo;