import React from 'react';
import { Row, Col, Form, Input, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
class AddRoleInfo extends React.Component {

    render() {

        const { getFieldDecorator } = this.props.form;
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

        return (
            <div >
                <Row style={{ textAlign: "left" }}>

                    <Col span={14} offset={5}>
                        <h1 style={{ fontSize: 24 }}>Role Information</h1>
                        <hr />
                        <Form width="600" style={{ padding: "20px 0px" }} {...formItemLayout} className="login-form">
                            <Form.Item
                                label={
                                    <span>User Name&nbsp;</span>
                                }
                            >
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your Username!', whitespace: false }],
                                })(<Input />)}
                            </Form.Item>
                        </Form>

                        <h1 style={{ fontSize: 24 }}>Current User Identity Verification</h1>
                        <hr />
                        <Form width="600" style={{ padding: "20px 0px" }} {...formItemLayout} className="login-form">
                            <Form.Item
                                label={
                                    <span>Your Password&nbsp;</span>
                                }
                            >
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your Username!', whitespace: false }],
                                })(<Input />)}
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">
                                    Save Role
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>

            </div>
        );
    }
}
const AddRoleForm = Form.create({ name: 'normal_login' })(AddRoleInfo);
export default AddRoleForm;