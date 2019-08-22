import React from 'react';
import { PageHeader } from 'antd';
import styles from './products.css';
import { Menu, Dropdown, Button, Icon, message } from 'antd';
import { Select } from 'antd';
import { Tabs } from 'antd';
import {Link} from 'react-router-dom';
import ProductTable from './product_table';
import { Form, Row, Col, Input } from 'antd';
const Option = Select.Option;

const TabPane = Tabs.TabPane;

// function handleButtonClick(e) {
//     message.info('Click on left button.');
//     console.log('click left button', e);
// }

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}
const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
            <Icon type="user" />
            1st menu item
      </Menu.Item>
        <Menu.Item key="2">
            <Icon type="user" />
            2nd menu item
      </Menu.Item>
        <Menu.Item key="3">
            <Icon type="user" />
            3rd item
      </Menu.Item>
    </Menu>
);
const { OptGroup } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}
class Product extends React.Component {
    static getDerivedStateFromProps(nextProps) {
        // Should be a controlled component.
        if ('value' in nextProps) {
            return {
                ...(nextProps.value || {}),
            };
        }
        return null;
    }

    handleNumberChange = e => {
        const number = parseInt(e.target.value || 0, 10);
        if (Number.isNaN(number)) {
            return;
        }
        if (!('value' in this.props)) {
            this.setState({ number });
        }
        this.triggerChange({ number });
    };

    handleCurrencyChange = currency => {
        if (!('value' in this.props)) {
            this.setState({ currency });
        }
        this.triggerChange({ currency });
    };

    triggerChange = changedValue => {
        // Should provide an event to pass value to Form.
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(Object.assign({}, this.state, changedValue));
        }
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const { size } = this.props;
        return (

            <div>
                <PageHeader className="product_header">
                    <div id="components-dropdown-demo-dropdown-button">
                        <Dropdown.Button className="add_product" overlay={menu} icon={<Icon type="down" />}>
                           <Link to="/dashboard/catalog/products/add_products">Add Product</Link>
    </Dropdown.Button>
                    </div>
                </PageHeader>
                <Tabs type="card" className="product_tabs">
                    <TabPane tab="Filter" key="1">
                        <div className="filter_top_1">
                            <div className="id">
                                <span id="i">ID</span><br />
                                <span>
                                    from
                            <Input
                                        type="text"
                                        size={size}
                                        // value={state.number}
                                        onChange={this.handleNumberChange}
                                        style={{ width: '80%', marginRight: '3%', marginLeft: '3%' }}
                                    />
                                </span>
                                <br /><br />
                                <span className="to">
                                    to
                            <Input
                                        type="text"
                                        size={size}
                                        // value={state.number}
                                        onChange={this.handleNumberChange}
                                        style={{ width: '80%', marginRight: '3%', marginLeft: '9.1%', marginTop: '2%' }}
                                    />
                                </span>
                            </div>

                            <div className="Price">
                                <span id="p">Price</span><br />
                                <span>
                                    from
                            <Input
                                        type="text"
                                        size={size}
                                        // value={state.number}
                                        onChange={this.handleNumberChange}
                                        style={{ width: '80%', marginRight: '3%', marginLeft: '3%' }}
                                    />
                                </span>
                                <br /><br />
                                <span className="to">
                                    to
                            <Input
                                        type="text"
                                        size={size}
                                        // value={state.number}
                                        onChange={this.handleNumberChange}
                                        style={{ width: '80%', marginRight: '3%', marginLeft: '9.1%', marginTop: '2%' }}
                                    />
                                </span>
                            </div>

                            <div className="Quantity">
                                <span id="q">Quantity</span><br />
                                <span>
                                    from
                            <Input
                                        type="text"
                                        size={size}
                                        // value={state.number}
                                        onChange={this.handleNumberChange}
                                        style={{ width: '80%', marginRight: '3%', marginLeft: '3%' }}
                                    />
                                </span>
                                <br /><br />
                                <span className="to">
                                    to
                            <Input
                                        type="text"
                                        size={size}
                                        // value={state.number}
                                        onChange={this.handleNumberChange}
                                        style={{ width: '80%', marginRight: '3%', marginLeft: '9.1%', marginTop: '2%' }}
                                    />
                                </span>
                            </div>

                            <div className="Coast">
                                <span id="c">Coast</span><br />
                                <span>
                                    from
                            <Input
                                        type="text"
                                        size={size}
                                        // value={state.number}
                                        onChange={this.handleNumberChange}
                                        style={{ width: '80%', marginRight: '3%', marginLeft: '3%' }}
                                    />
                                </span>
                                <br /><br />
                                <span className="to">
                                    to
                            <Input
                                        type="text"
                                        size={size}
                                        // value={state.number}
                                        onChange={this.handleNumberChange}
                                        style={{ width: '80%', marginRight: '3%', marginLeft: '9.1%', marginTop: '2%' }}
                                    />
                                </span>
                            </div>
                        </div>
                        <br /><br />
                        <div className="store_view">
                            <div className="select_1">
                                <span id="store">Store View</span><br />
                                <span>
                                    <Select className="slct" defaultValue="lucy" onChange={handleChange}>
                                        <OptGroup label="Manager">
                                            <Option value="jack">Jack</Option>
                                            <Option value="lucy">Lucy</Option>
                                        </OptGroup>
                                        <OptGroup label="Engineer">
                                            <Option value="Yiminghe">yiminghe</Option>
                                        </OptGroup>
                                    </Select>
                                </span>
                            </div>
                            <div className="name">
                                <span id="n">Name</span><br />
                                <span>
                                    <Input
                                        type="text"
                                        size={size}
                                        // value={state.number}
                                        onChange={this.handleNumberChange}
                                        style={{ width: '80%', marginRight: '3%', marginLeft: '0%' }}
                                    />
                                </span>
                            </div>
                            <div className="type">
                                <span id="t">Type</span><br />
                                <span>
                                    <Input
                                        type="text"
                                        size={size}
                                        // value={state.number}
                                        onChange={this.handleNumberChange}
                                        style={{ width: '80%', marginRight: '3%', marginLeft: '0%' }}
                                    />
                                </span>
                            </div>
                            <div className="attribute">
                                <span id="a">Attribute</span><br />
                                <span>
                                    <Input
                                        type="text"
                                        size={size}
                                        // value={state.number}
                                        onChange={this.handleNumberChange}
                                        style={{ width: '80%', marginRight: '3%', marginLeft: '0%' }}
                                    />
                                </span>
                            </div>
                        </div>
                        <div className="SkUU">
                            <div className="sku">
                                <span id="sku">SKU</span><br />
                                <span>
                                    <Input
                                        type="text"
                                        size={size}
                                        // value={state.number}
                                        onChange={this.handleNumberChange}
                                        style={{ width: '80%', marginRight: '3%', marginLeft: '0%' }}
                                    />
                                </span>
                            </div>
                            <div className="visible">
                                <span id="visi">Visibility</span><br />
                                <span>
                                    <Select className="slct" defaultValue="lucy" onChange={handleChange}>
                                        <OptGroup label="Manager">
                                            <Option value="jack">Jack</Option>
                                            <Option value="lucy">Lucy</Option>
                                        </OptGroup>
                                        <OptGroup label="Engineer">
                                            <Option value="Yiminghe">yiminghe</Option>
                                        </OptGroup>
                                    </Select>
                                </span>
                            </div>
                            <div className="status">
                                <span id="status">Status</span><br />
                                <span>
                                    <Select className="slct" defaultValue="lucy" onChange={handleChange}>
                                        <OptGroup label="Manager">
                                            <Option value="jack">Jack</Option>
                                            <Option value="lucy">Lucy</Option>
                                        </OptGroup>
                                        <OptGroup label="Engineer">
                                            <Option value="Yiminghe">yiminghe</Option>
                                        </OptGroup>
                                    </Select>
                                </span>
                            </div>
                            <div className="filter_btn">
                                <Button type="danger">Apply Filter</Button>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
                <ProductTable/>
            </div>
        )
    }
}
export default Product;