import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
    Form,
    Input,
    // Tooltip,
    Icon,
    // Cascader,
    // Select,
    Row,
    Col,
    // Checkbox,
    Button,
    AutoComplete,
} from 'antd';
import { Link } from 'react-router-dom';
class EditUserInfo extends React.Component {


    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        user: {},
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        newPassword: "",
        confirmPassword: "",
        oldPassword:""
    };
    componentDidMount() {
        // this.props.dispatch({type:"searchUser",payload:this.props.match.params.key})
        // console.log(this.props.match.params.key)
        // console.log()
        // this.props.users.map((value,index)=>{
        //     console.log(value.key)
        //     if(value.kay===this.props.match.params.key){

        //         this.setState({user:value})
        //         console.log(this.state.user.key)
        //     }
        // })

    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleConfirmBlur = e => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    };
    submitData = () => {

    }



    render() {
        // console.log(this.state.user)
        var user = this.props.users.filter((value) => {
            return value.key === this.props.match.params.key
        })
        console.log(user);
        const { getFieldDecorator } = this.props.form;
        // const { Option } = Select;
        const AutoCompleteOption = AutoComplete.Option;
        const { autoCompleteResult } = this.state;
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


        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));
        var style = {
            inner_head_div: {
                borderTop: "1px solid gray",
                borderBottom: "1px solid gray",
                padding: "15px 30px",
                margin: "35px 0",
                textAlign: "right",
                background: "#e0e0e0"
            },
            inner_head_h3: {
                display: "inline-block",
                padding: "10px",
                margin: "0 10px"
            }
        }
        //   var setFieldsValue=({ [username]: Zeeshan }) => { }
        console.log(this.state.userName)
        return (
            <div>
                <h1 style={{ fontSize: 24 }}>User Information</h1>

                {/* <div style={style.inner_head_div}>
          <Link to="/dashboard/setting/allusers"><h3 style={style.inner_head_h3} ><Icon type="arrow-left" />&nbsp;&nbsp;Back</h3></Link>
          <Link><h3 style={style.inner_head_h3} >Reset</h3></Link>
          <Button type="primary">Save User</Button>
        </div> */}
                <Row>
                    <Col span={5}>

                    </Col>
                    <Col span={14}>
                        <Form width="600" {...formItemLayout} className="login-form">
                            <Form.Item
                                label={
                                    <span>User Name&nbsp;</span>
                                }
                            >
                                <Input defaultValue={user[0].userName}
                                    onChange={(e) => { this.setState({ userName: e.target.value }) }}
                                />
                            </Form.Item>
                            <Form.Item label="First Name">
                                <Input style={{ width: '100%' }} defaultValue={user[0].firstName}
                                    onChange={(e) => { this.setState({ firstName: e.target.value }) }}
                                />
                            </Form.Item>
                            <Form.Item label="Last Name">
                                <Input style={{ width: '100%' }} defaultValue={user[0].lastName}
                                    onChange={(e) => { this.setState({ lastName: e.target.value }) }}
                                />
                            </Form.Item>
                            <Form.Item label="E-mail">
                                <Input defaultValue={user[0].email}
                                    onChange={(e) => { this.setState({ email: e.target.value }) }}
                                />
                            </Form.Item>
                            <Form.Item label="New Password" hasFeedback>
                                <Input.Password 
                                onChange={(e)=>{this.setState({newPassword:e.target.value})} }
                                />
                            </Form.Item>
                            <Form.Item label="Confirm Password" hasFeedback>
                                <Input.Password onBlur={this.handleConfirmBlur} 
                                onChange={(e)=>{this.setState({confirmPassword:e.target.value})} }
                                />
                            </Form.Item>
                            <hr />
                            <Form.Item label="Old Password" hasFeedback>
                                <Input.Password />
                            </Form.Item>
                            <Form.Item >
                                <Button type="primary" htmlType="submit" onClick={this.submitData}>
                                    Save User
                    </Button>
                            </Form.Item>

                        </Form>

                    </Col>
                    <Col span={5} >

                    </Col>

                </Row>


            </div>
        );
    }
}
const WrappedRegistrationForm = Form.create({ name: 'register' })(EditUserInfo);
const mapStateToProps = (store) => (
    { users: store.AllUsers })
export default connect(mapStateToProps)(withRouter(WrappedRegistrationForm));