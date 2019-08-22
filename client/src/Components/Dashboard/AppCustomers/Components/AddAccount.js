import React, { Component } from "react";
import { Modal, Row, Col, Input, Radio, Button } from "antd";
import randomstring from 'randomstring';


class AddAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      role: ""
    };
  }

  cancelHandler = () => {
      this.resetState();
    this.props.closeModal();
  };

  resetState = ()=>this.setState({
      name:"",
      role:"",
      password:""
  })

  generateRandomPassword = ()=>{

      this.setState({password:randomstring.generate(8)})
  }

  onChangeHandler = evt =>
    this.setState({ [evt.target.name]: evt.target.value });

    okHandler = ()=>{
       this.props.addAccount({
           name:this.state.name,
           password:this.state.password,
           appName:this.props.appName,
           role:this.state.role
       })
       this.resetState();
       this.props.closeModal()
       this.props.updateAccountTable();
    }
  render() {
    return (
      <div>
        <Modal
          visible={this.props.isModalOpen}
          title="Add Account"
          onCancel={this.cancelHandler}
          maskClosable={false}
          width="80%"
          onOk={this.okHandler}
        >
          <Row>
            <Col span={24}>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onChangeHandler}
                addonBefore="Account Name"
                placeholder="Enter Account Name"
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }} gutter={16}>
            <Col span={12}>
              <Input
                value={this.state.password}
                name="name"
                type="password"
                addonBefore="password"
                disabled
              />
            </Col>
            <Col span={12}>
              <Button onClick = {this.generateRandomPassword}> Generate Password</Button>
            </Col>
          </Row>
          <Row className="input-top-margin">
            <Col style={{ display: "flex" }} span={24}>
              <div style={{ marginRight: "10px" }}>
                <b style={{ marginLeft: "2px" }}>Role</b>
              </div>
              <div>
                <Radio
                  onChange={this.onChangeHandler}
                  checked={this.state.role === "admin"}
                  value="admin"
                  name="role"
                >
                  Admin
                </Radio>
                <Radio
                  onChange={this.onChangeHandler}
                  checked={this.state.role === "sales_man"}
                  value="sales_man"
                  name="role"
                >
                  Sales Man
                </Radio>
              </div>
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}


export default AddAccount;

