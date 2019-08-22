import React from 'react';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon } from 'antd';
import './add_products.css';
import { PageHeader } from 'antd';
import DrawerTabs from './drawer-tabs';
import DrawerTable from './Drawer-table';
import CreateAttribute from './create-attribute';
const { Option } = Select;

class DrawerForm extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  //   <Icon type="plus" />
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Button style={{ marginLeft: 8 }} className="btnn" onClick={this.showDrawer}>
          Add Attribute
        </Button>
        <Drawer
          title="Add Attribute"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <PageHeader className="product_header">

          </PageHeader>
          <div className="jumbo">
            <span id="sp1">Select Attribute</span>
            <span id="sp2">
              <CreateAttribute/>
            </span>
          </div>
          <br/><br/>
          <div>
            <DrawerTabs />
          </div>
          <hr/>
          <DrawerTable/>
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={this.onClose} type="primary">
              Add Selected
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Form.create()(DrawerForm);
