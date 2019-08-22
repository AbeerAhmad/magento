import React from "react";
import { Row, Col, Divider, Typography, Button } from "antd";
import Branches from "./Branches";
import AddBranch from "./AddBranch";

class AppFeature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentOptions: {
        easypaisa: "easypaisa",
        konnect: "konnect",
        mobicash: "mobicash",
        isAddBranchModalOpen: false
      }
    };
  }

  updateBranches = () => this.forceUpdate();
  openAddBranchModal = () => this.setState({ isAddBranchModalOpen: true });
  closeAddBranchModal = () => this.setState({ isAddBranchModalOpen: false });

  render() {
    const { app } = this.props;
    return (
      <div>
        <Row>
          <Col>
            <Typography.Title level={2}>App Features</Typography.Title>
          </Col>
          <Col>
            <Divider />
          </Col>
        </Row>
        <Row>
          <Col>
            <Typography.Title level={3}>Payment Options</Typography.Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Easy Paisa</th>
                  <th>Konnect</th>
                  <th>Mobi Cash</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {app.appFeatures.paymentOptions.includes("easypaisa")
                      ? "Enabled"
                      : "Disabled"}
                  </td>
                  <td>
                    {app.appFeatures.paymentOptions.includes("konnect")
                      ? "Enabled"
                      : "Disabled"}
                  </td>
                  <td>
                    {app.appFeatures.paymentOptions.includes("mobicash")
                      ? "Enabled"
                      : "Disabled"}
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        {app.appFeatures.isDistributionEnabled && (
          <div>
            <Row>
              <Col>
                <Typography.Title level={3}>Distribution</Typography.Title>
              </Col>
            </Row>
            <Row style={{ marginBottom: "5px" }} type="flex" justify="end">
              <Col>
                <Button
                  shape="circle"
                  icon="plus"
                  type="primary"
                  size="large"
                  onClick={this.openAddBranchModal}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Branches
                  app={app}
                  updateBranches={this.updateBranches}
                  branches={app.appFeatures.branches}
                />
              </Col>
            </Row>
          </div>
        )}
        <AddBranch
          app={app}
          openModal={this.openAddBranchModal}
          closeModal={this.closeAddBranchModal}
          isModalOpen={this.state.isAddBranchModalOpen}
        />
      </div>
    );
  }
}
export default AppFeature;
