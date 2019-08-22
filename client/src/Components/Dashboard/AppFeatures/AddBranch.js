import React from "react";
import { Modal, Input, Row, Col, Radio, Select } from "antd";
import { appAccountModel, AppsList } from "../../../shared";
class AddBranch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      branchName: "",
      branchUser: "",
      branchType: ""
    };
  }

  onChangeHandler = evt => {
    if (evt.target) {
      if (evt.target.name === "branchName") {
        this.setState({ [evt.target.name]: evt.target.value });
      } else {
        this.setState({ branchType: evt.target.name });
      }
    } else {
      this.setState({ branchUser: evt });
    }
  };
  resetState = () => {
    this.setState({
      branchName: "",
      branchUser: "",
      branchType: ""
    });
  };

  addBranchHandler = () => {
    const branch = {
      id: this.props.app.appFeatures.branches.length + 1,
      name: this.state.branchName,
      type: this.state.branchType,
      stuff: {},
      incharge: this.state.branchUser
    };
    AppsList.find(
      app => app.appName === this.props.app.appName
    ).appFeatures.branches.unshift(branch);
    this.props.closeModal();
    this.resetState();
  };

  onCancelHandler = () => {
    this.props.closeModal();
    this.resetState();
  };

  render() {
    return (
      <Modal
        width="80%"
        maskClosable={false}
        onOk={this.addBranchHandler}
        visible={this.props.isModalOpen}
        title="Add Branch"
        onCancel={this.props.closeModal}
      >
        <Row>
          <Col>
            <Input
              type="text"
              addonBefore="Name"
              placeholder="Enter branch name here"
              value={this.state.branchName}
              onChange={this.onChangeHandler}
              name="branchName"
            />
          </Col>
        </Row>
        <Row className="input-top-margin">
          <Col>
            <b style={{ marginRight: "20px" }}>Type</b>
            <Radio
              name="branch"
              onChange={this.onChangeHandler}
              checked={this.state.branchType === "branch"}
            >
              Branch
            </Radio>
            <Radio
              name="godown"
              onChange={this.onChangeHandler}
              checked={this.state.branchType === "godown"}
            >
              Godown
            </Radio>
          </Col>
        </Row>
        <Row className="input-top-margin">
          <Col>
            <Select
              placeholder="Select User"
              className="input-top-margin"
              style={{ width: "100%" }}
              onChange={this.onChangeHandler}
            >
              {appAccountModel
                .getAccounts(this.props.app.appName)
                .map(account => (
                  <Select.Option value={account.name} key={account.id}>
                    {account.name}
                  </Select.Option>
                ))}
            </Select>
          </Col>
        </Row>
      </Modal>
    );
  }
}
export default AddBranch;
