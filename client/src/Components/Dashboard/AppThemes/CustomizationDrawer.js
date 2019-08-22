import React from "react";
import { Drawer, Col, Row, Typography, Switch } from "antd";

class CustomiztionDrawer extends React.Component {
  topChangeHandler = checked => {
    // if (checked) {
    //   document
    //     .getElementById("computerIFrame")
    //     .contentDocument.getElementById("topBanner").style.display = "block";
    //   document
    //     .getElementById("mobileIFrame")
    //     .contentDocument.getElementById("topBanner").style.display = "block";
    // } else {
    //   document
    //     .getElementById("computerIFrame")
    //     .contentDocument.getElementById("topBanner").style.display = "none";
    //   document
    //     .getElementById("mobileIFrame")
    //     .contentDocument.getElementById("topBanner").style.display = "none";
    // }
  };
  rightBannerHandler = checked => {
    // if (checked) {
    //   document
    //     .getElementById("computerIFrame")
    //     .contentDocument.getElementById("rightBanner").style.display = "block";
    //   document
    //     .getElementById("mobileIFrame")
    //     .contentDocument.getElementById("rightBanner").style.display = "block";
    // } else {
    //   document
    //     .getElementById("computerIFrame")
    //     .contentDocument.getElementById("rightBanner").style.display = "none";
    //   document
    //     .getElementById("mobileIFrame")
    //     .contentDocument.getElementById("rightBanner").style.display = "none";
    // }
  };

  leftBannerHandler = checked => {
    // if (checked) {
    //   document
    //     .getElementById("computerIFrame")
    //     .contentDocument.getElementById("leftBanner").style.display = "block";
    //   document
    //     .getElementById("mobileIFrame")
    //     .contentDocument.getElementById("leftBanner").style.display = "block";
    // } else {
    //   document
    //     .getElementById("computerIFrame")
    //     .contentDocument.getElementById("leftBanner").style.display = "none";
    //   document
    //     .getElementById("mobileIFrame")
    //     .contentDocument.getElementById("leftBanner").style.display = "none";
    // }
  };

  render() {
    return (
      <Drawer
        visible={this.props.isDrawerOpen}
        title="Customization Options"
        placement="left"
        mask={false}
        width="210px"
        closable={false}
      >
        <Row>
          <Col span={18}>
            <Typography.Text>Top Banner</Typography.Text>
          </Col>
          <Col span={6}>
            <Switch onChange={this.topChangeHandler} />
          </Col>
        </Row>
        <Row className="input-top-margin">
          <Col span={18}>
            <Typography.Text>Right Banner</Typography.Text>
          </Col>
          <Col span={6}>
            <Switch onChange={this.rightBannerHandler} />
          </Col>
        </Row>
        <Row className="input-top-margin">
          <Col span={18}>
            <Typography.Text>Left Banner</Typography.Text>
          </Col>
          <Col span={6}>
            <Switch onChange={this.leftBannerHandler} />
          </Col>
        </Row>
      </Drawer>
    );
  }
}
export default CustomiztionDrawer;
