import React, { Component } from "react";
import { Select,  } from 'antd';
const { Option } = Select;
class OrderTotal extends Component {
    render() {
        return (
            <div className="vew-inner-container">
                <h1 className="view-account-info">Order Total</h1>
                <div className="order-info-box">
                    <div className="order-no-box">
                        <h1 className="view-order-no">Notes for this Order </h1>
                        <p className="order-total-p">status</p>
                        {/* <Select icon
          style={{ width: '32%' }}
        >
          <Option value="rmb">Processing</Option>
          <Option value="dollar">Suspected Fraud</Option>
        </Select> */}
        <select>
            <option>Processing</option>
            <option>Suspected Fraud</option>
        </select>
                        <p className="order-total-p">Comment</p>
                        <textarea className="order-comment"></textarea>
                        <div>
                            <input type="checkbox" /> <span>Notify Customer by Email</span>
                        </div>
                        <div>
                            <input type="checkbox" /> <span>Visible on Storefront</span>
                        </div>
                        <button className="total-submit-button">Submit Order</button>

                    </div>

                    <div className="order-no-box">
                        <h1 className="view-order-no">Order Totals </h1>
                        <div style={{borderBottom:'none'}} className="view-order-date">
                            <span>Subtotal</span>
                            <span>$20.00</span>
                        </div>
                        <div className="view-order-date">
                            <span>Shiping &amp; Handling</span>
                            <span>$10.00</span>
                        </div>
                        <div style={{borderBottom:'none'}} className="view-order-date">
                            <b>Grand Total</b>
                            <b>$30.00</b>
                        </div>


                    </div>
                </div>

            </div>
        )
    }
}
export default OrderTotal;