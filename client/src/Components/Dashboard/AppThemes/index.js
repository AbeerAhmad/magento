import React from "react";
import { Row, Col, Typography, Divider, Card, Button, Icon } from "antd";
import CustomizeTheme from "./CustomizeTheme";
import CustomizationDrawer from './CustomizationDrawer'
class AppTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCustomizing: false
    };
  }

  customizingHandler = () =>
    this.setState({ isCustomizing: !this.state.isCustomizing });

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Typography.Title level={2}>Themes</Typography.Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <Divider style={{ marginTop: "10px" }} />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col lg={6}>
            <Typography.Title level={4}>Current Theme</Typography.Title>
            <Typography.Text>
              This will be the discription about the theme!
            </Typography.Text>
          </Col>
          <Col lg={this.state.isCustomizing ? 24 : 18}>
            <Card>
              <Row>
                <Col>
                  <Typography.Title level={4}>Debut</Typography.Title>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Typography.Text>
                    Showcase your brands and products with Debut, with our
                    signature theme
                  </Typography.Text>
                </Col>
              </Row>
              <Row >
                <Col lg={18}>
                  <div  className="preview-theme-computer">
                    {/* <img src="/images/full-light.png" width="100%" height="100%"/> */}
                    <iframe
                      title="Computer_View"
                      id="computerIFrame"
                      src="/PRS050107/index.html"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="preview-theme-mobile">
                    <iframe
                      title="Mobile_View"
                      id="mobileIFrame"
                      src="/PRS050107/index.html"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }} type="flex" justify="center">
                <Col>
                  <CustomizeTheme
                    customizingHandler={this.customizingHandler}
                    isCustomizing = {this.state.isCustomizing}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row>
          <Divider />
        </Row>
        <Row>
          <Col span={6} offset={12}>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button shape="round">
                <Icon type="left" />
              </Button>
              <Button shape="round">
                <Icon type="right" />
              </Button>
            </div>
          </Col>
          <Col span={6}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button shape="round">Apply</Button>
            </div>
          </Col>
        </Row>
        <CustomizationDrawer isDrawerOpen={this.state.isCustomizing}/>
      </div>
    );
  }
}
export default AppTheme;
