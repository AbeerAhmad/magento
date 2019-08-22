import React, { Component } from 'react'
import {
    Card, Typography, Form, Input, Checkbox,
    Button,
    Select,
    message,Spin
} from 'antd'
import signupActionProvider from '../../Redux/Epics/signup'
import {connect} from 'react-redux'

const { Option } = Select;


class RegistrationForm extends Component {



    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                this.props.dispatch(signupActionProvider.create(values))
                // var options = {
                //     method: 'POST',
                //     body: JSON.stringify(values),
                //     headers: {
                //         'Content-Type': 'application/json'
                //     }
        
                // }
        
        
                // fetch('http://localhost:5000/users/signup', options)
                //     .then(res => res.json())
                //     .then(json => {
                //         if(json){
                //             console.log(json)
                //         message.success('This is a success message')
                //         this.props.history.push('/')
                //     }else{
                //         message.error('sumthing went wrong')
                //     }
                //     })
                //     .catch((error) => { console.log(error) });
            }else{
                message.error('something went Wrong')
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback(`password didn't match`);
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
      if(value.length>=8){
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();}else{
            callback('password must be consist of 8 or more letters')
        }
    };

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
            },
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
                },
            },
        };
        const {loading}=this.props
        return (
            <div className="signup-container" >
                <Card bordered style={{ borderRadius: "10px" }}>
                    <div >
                        <Typography.Title level={2}>Create an Account</Typography.Title>
                    </div><hr /><br /><br />
                    <div>
                        <Typography.Title level={4}>Personal Information</Typography.Title>
                    </div><hr color='lightgrey' />
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <div className='signup-form'>

                            <Form.Item label="FirstName" >
                                {getFieldDecorator('FirstName', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please input your first name!',
                                        },
                                    ],
                                })(<Input size="large" />)}
                            </Form.Item>
                            <Form.Item label="LastName" >
                                {getFieldDecorator('LastName', {
                                    rules: [

                                        {
                                            required: true,
                                            message: 'Please input your lastName!   ',
                                        },
                                    ],
                                })(<Input size="large" />)}
                            </Form.Item>
                            <Form.Item label="E-mail">
                                {getFieldDecorator('email', {
                                    rules: [
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!',
                                        },
                                    ],
                                })(<Input size="large" />)}
                            </Form.Item>
                            <Form.Item label=" Country">
                                {getFieldDecorator('Country', {
                                    initialValue: 'Pakistan',
                                    rules: [
                                        { required: true, message: 'Please select your Country' },
                                    ],
                                })(
                                    <Select>
                                        <Option value="Pakistan">Pakistan</Option>

                                    </Select>,
                                )}
                            </Form.Item>
                            <Form.Item label=" My Role">
                                {getFieldDecorator('role', {
                                    initialValue: 'business/sales/marketing/merchandising',
                                    rules: [
                                        { required: true, message: 'Please select your Country' },
                                    ],
                                })(
                                    <Select>
                                        <Option value="business/sales/marketing/merchandising">business/sales/marketing/merchandising</Option>
                                        <Option value="Technical/developer">Technical/developer</Option>

                                    </Select>,
                                )}
                            </Form.Item>
                        </div>
                        <div >
                            <Typography.Title level={4}>Login Information</Typography.Title>
                        </div><hr color='lightgrey' />
                        <div className='signup-form'>
                            <Form.Item label="Password" hasFeedback>
                                {getFieldDecorator('password', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                        {
                                            validator: this.validateToNextPassword,
                                        },
                                    ],
                                })(<Input.Password size="large" />)}
                            </Form.Item>
                            <Form.Item label="Confirm Password" hasFeedback>
                                {getFieldDecorator('confirm', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please confirm your password!',
                                        },
                                        {
                                            validator: this.compareToFirstPassword,
                                        },
                                    ],
                                })(<Input.Password onBlur={this.handleConfirmBlur} size="large" />)}
                            </Form.Item>

                            <Form.Item {...tailFormItemLayout}>
                                {getFieldDecorator('agreement', {
                                    valuePropName: 'checked',
                                    required: true
                                })(
                                    <Checkbox>
                                        I agree that use of this admin panel is subject to the Gamica <a>Terms of Service</a> and Gamica <a> Privacy Policy</a>. I understand that I can withdraw this consent at any time by visiting our preference center.

                                    </Checkbox>,
                                )}
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                              {loading ?<Spin size='large'/>: <Button type="primary" htmlType="submit"> Register   </Button>} 
                            </Form.Item>
                           

                        </div>
                    </Form>



                </Card>
            </div >
        )
    }
}

const mapStateToProps = (store)=>{
    return {
        loading:store.Signup.loading
    }
}
const Signup = Form.create({ name: 'Signup' })(RegistrationForm);
const connectedSignup = connect(mapStateToProps)(Signup)

export default connectedSignup