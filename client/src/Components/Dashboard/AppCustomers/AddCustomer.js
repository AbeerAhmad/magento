import React from 'react';
import {
    Menu,
    Icon,
    Row,
    Col,
    PageHeader,
    Tabs,
    Divider,
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Checkbox,
    Button,
    AutoComplete,
    DatePicker
} from 'antd';
import { Link } from 'react-router-dom';
import './style.css';
import WrappedRegistrationForm from './Components/AddCustomerForm';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;


class AddCustomer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
        };
    }
    render() {

        return (
            <div>
                <PageHeader className="customer-header"
                    extra={[
                        <div className="add-customer-header">
                            <Link to="/dashboard/customers/all"><Icon type="arrow-left" />Back</Link>
                        </div>
                    ]} >
                </PageHeader>
                <div className="add-customer-body">
                    <Row>
                        <Col span={5}>
                            <h1 style={{ fontSize: 14, fontWeight: 'bold' }}>CUSTOMER INFORMATION</h1>
                            <Divider></Divider>
                            <h1 style={{ fontSize: 14, fontWeight: 'bold' }}><a href="#">Account Information</a></h1>
                        </Col>
                        <Col span={16} offset={1}>
                            <h1 style={{ fontSize: 20 }}>Account Information</h1>
                            <Divider></Divider>
                            <WrappedRegistrationForm />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default AddCustomer;