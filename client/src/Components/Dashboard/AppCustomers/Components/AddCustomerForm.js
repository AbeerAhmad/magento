import React from 'react';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    DatePicker,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;


class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            values: {
                website: 'main',
                group: 'general',
                nameprefix: '',
                firstname: '',
                middlename: '',
                lastname: '',
                namesuffix: '',
                email: '',
                dateofbirth: '',
                taxnumber: '',
                gender: 'male',
                welcome: 'defaultstore',
                vertex: ''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleResetButton = this.handleResetButton.bind(this);
    }

    //Handling Submit Button Here
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });  
    };

    // Handling Clear and Reset Button Here
    handleResetButton () {
        this.props.form.resetFields();
        let defaultValues = {
            website: 'main',
            group: 'general',
            nameprefix: '',
            firstname: '',
            middlename: '',
            lastname: '',
            namesuffix: '',
            email: '',
            dateofbirth: '',
            taxnumber: '',
            gender: 'male',
            welcome: 'defaultstore',
            vertex: ''
        }
        this.setState({values: defaultValues});
    }

    handleConfirmBlur = e => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };


    // State Management Functions for Form Components

    setWebsiteState = value => {
        const myState = { ...this.state };
        myState.values.website = value;
        this.setState({ values: myState.values });
    }

    setGroupState = value => {
        const myState = { ...this.state };
        myState.values.group = value;
        this.setState({ values: myState.values });
    }

    setNamePrefix = e => {
        const myState = { ...this.state };
        myState.values.nameprefix = e.target.value;
        this.setState({ values: myState.values });
    }

    setFirstName = e => {
        const myState = { ...this.state };
        myState.values.firstname = e.target.value;
        this.setState({ values: myState.values });
    }

    setMiddleName = e => {
        const myState = { ...this.state };
        myState.values.middlename = e.target.value;
        this.setState({ values: myState.values });
    }

    setLastName = e => {
        const myState = { ...this.state };
        myState.values.lastname = e.target.value;
        this.setState({ values: myState.values });
    }

    setNameSuffix = e => {
        const myState = { ...this.state };
        myState.values.namesuffix = e.target.value;
        this.setState({ values: myState.values });
    }

    setEmail = e => {
        const myState = { ...this.state };
        myState.values.email = e.target.value;
        this.setState({ values: myState.values });
    }

    setDOB = (dummy, dateString) => {
        const myState = { ...this.state };
        myState.values.dateofbirth = dateString;
        this.setState({ values: myState.values });
    }

    setTaxNumber = e => {
        const myState = { ...this.state };
        myState.values.taxnumber = e.target.value;
        this.setState({ values: myState.values });
    }
    
    setGender = e => {
        const myState = { ...this.state };
        myState.values.gender = e;
        this.setState({ values: myState.values });
    }

    setVertex = e => {
        const myState = {...this.state};
        myState.values.vertex = e.target.value;
        this.setState({values: myState.values});
    }



    render() {

        const { getFieldDecorator } = this.props.form

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            }
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                }
            }
        };

        console.log(this.state)
        return (
            // Form Starts Here
            <Form {...formItemLayout} onSubmit={this.handlesubmit}>
                {/* Website Field */}
                <Form.Item label="Website" >
                    {getFieldDecorator('website', {
                        initialValue: this.state.values.website,
                        rules: [{
                            required: true,
                            message: 'Please select a website'
                        }],
                    })(
                        <Select onChange={this.setWebsiteState} >
                            <Option value="main">Main Website</Option>
                            <Option value="second">Second Website</Option>
                        </Select>,
                    )}
                </Form.Item>
                {/* Group Field */}
                <Form.Item label="Group" >
                    {getFieldDecorator('group', {
                        initialValue: this.state.values.group,
                        rules: [{
                            required: true,
                            message: 'Please select a group'
                        }],
                    })(
                        <Select placeholder="Please select a group" onChange={this.setGroupState}>
                            <Option value="general">General</Option>
                            <Option value="retailer">Retailer</Option>
                            <Option value="wholesale">Wholesale</Option>
                        </Select>,
                    )}
                </Form.Item>
                {/* Name Fields */}
                {/* Prefix */}
                <Form.Item {...formItemLayout} label="Name Prefix">
                    {getFieldDecorator('nameprefix', {
                        rules: [
                            {
                                required: false,
                            },
                        ],
                    })(<Input onChange={this.setNamePrefix} />)}
                </Form.Item>
                {/* FirstName */}
                <Form.Item {...formItemLayout} label="First Name" >
                    {getFieldDecorator('firstname', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your first name',
                            },
                        ],
                    })(<Input onChange={this.setFirstName} />)}
                </Form.Item>
                {/* Middle Name/Initial */}
                <Form.Item {...formItemLayout} label="Middle Name/Initial">
                    {getFieldDecorator('middlename', {
                        rules: [
                            {
                                required: false,
                            },
                        ],
                    })(<Input onChange={this.setMiddleName}/>)}
                </Form.Item>
                {/* LastName */}
                <Form.Item {...formItemLayout} label="Last Name" >
                    {getFieldDecorator('lastname', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your last name',
                            },
                        ],
                    })(<Input onChange={this.setLastName} />)}
                </Form.Item>
                {/* Name Suffix */}
                <Form.Item {...formItemLayout} label="Name Suffix">
                    {getFieldDecorator('namesuffix', {
                        rules: [
                            {
                                required: false,
                            },
                        ],
                    })(<Input onChange={this.setNameSuffix} />)}
                </Form.Item>
                {/* Email Field */}
                <Form.Item label="Email" >
                    {getFieldDecorator('Email', {
                        rules: [{
                            type: 'email',
                            message: 'The input is not valid E-mail!'
                        },
                        {
                            required: true,
                            message: 'Please input E-mail'
                        }],
                    })(<Input onChange={this.setEmail} />)}
                </Form.Item>
                {/* Date of Birth */}
                <Form.Item label="Date of Birth">
                    {getFieldDecorator('dateofbirth', {
                        type: 'object',
                        require: true,
                        message: 'Please select date of birth'
                    })(<DatePicker onChange={this.setDOB} format={'DD/MMM/YYYY'} />)}
                </Form.Item>
                {/* Tax/VAT Number */}
                <Form.Item {...formItemLayout} label="Tax/VAT Number">
                    {getFieldDecorator('taxnumber', {
                        rules: [
                            {
                                required: false,
                            },
                        ],
                    })(<Input onChange={this.setTaxNumber} />)}
                </Form.Item>
                {/* Gender */}
                <Form.Item label="Gender">
                    {getFieldDecorator('gender', {
                        initialValue: this.state.values.gender,
                        rules: [{
                            required: true,
                            message: 'Please select gender'
                        }],
                    })(
                        <Select placeholder="Please select gender" onChange={this.setGender}>
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                            <Option value="notspecified">Not Specified</Option>
                        </Select>,
                    )}
                </Form.Item>
                {/* Send Welcome Email From */}
                <Form.Item label="Send Welcome Email From">
                    {getFieldDecorator('welcome', {
                        initialValue: this.state.values.welcome,
                        rules: [{
                            required: true,
                            message: 'Please select sender`'
                        }],
                    })(
                        <Select placeholder="Please select sender" onChange={this.setWelcome}>
                            <Option value="defaultstore">Default Store View</Option>
                            <Option value="main">Main Website</Option>
                            <Option value="mainstore">Main Website Store</Option>
                        </Select>,
                    )}
                </Form.Item>
                {/* Vertex Customer Code */}
                <Form.Item {...formItemLayout} label="Vertex Customer Code">
                    {getFieldDecorator('vertexcode', {
                        rules: [
                            {
                                required: false,
                            },
                        ],
                    })(<Input onChange={this.setVertex} />)}
                </Form.Item>
                {/* Save, Reset and Save and Continue Buttons */}
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Save Customer
                    </Button>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="default">
                        Save and continue edit
                    </Button>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="danger" onClick={this.handleResetButton}>
                        Reset All Fields
                    </Button>
                </Form.Item>
            </Form>
        );

    }

}

const WrappedRegistrationForm = Form.create({ name: 'addcustomer' })(RegistrationForm);

export default WrappedRegistrationForm;