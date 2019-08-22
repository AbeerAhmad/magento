import React from 'react';
import { Form, Row, Col, Input, Button, Icon } from 'antd';
import { Select } from 'antd';
import { Upload } from 'antd';
import './add_products.css';
import { PageHeader, Dropdown, Menu } from 'antd';
import DrawerForm from './addAttributeDrawer';

const menu = (
  <Menu>
    <Menu.Item key="1">
      <Icon type="user" />
      1st menu item
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user" />
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user" />
      3rd item
    </Menu.Item>
  </Menu>
);
const fileList = [
  // {
  //   uid: '-1',
  //   name: 'image.png',
  //   status: 'done',
  //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  //   thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  // },
  // {
  //   uid: '-2',
  //   name: 'yyy.png',
  //   status: 'done',
  //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  //   thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  // },
];

const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  listType: 'picture',
  defaultFileList: [...fileList],
};

const props2 = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  listType: 'picture',
  defaultFileList: [...fileList],
  className: 'upload-list-inline',
};

const { Option, OptGroup } = Select;
class AddProduct extends React.Component {
  state = {
    expand: false,
  };

  // To generate mock Form.Item
  getFields() {
    // const count = this.state.expand ? 10 : 6;
    const { getFieldDecorator } = this.props.form;
    const children = [];
    children.push(
      <Col span={7} className="col-lab-1">
        <Form.Item label={`Attribute Set`}>
          <Select defaultValue="lucy">
            <OptGroup label="Manager">
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </OptGroup>
            <OptGroup label="Engineer">
              <Option value="Yiminghe">yiminghe</Option>
            </OptGroup>
          </Select>
        </Form.Item>
      </Col>,
      <Col span={7} className="col-lab-1">
        <Form.Item label={`Product Name`}>
          {getFieldDecorator(`Product Name`, {
            rules: [
              {
                required: true,
                message: 'Input something!',
              },
            ],
          })(<Input placeholder="enter product name ..." />)}
        </Form.Item>
      </Col>,
      <Col span={7} className="col-lab-1">
        <Form.Item label={`SKU`}>
          {getFieldDecorator(`sku`, {
            rules: [
              {
                required: true,
                message: 'Input something!',
              },
            ],
          })(<Input placeholder="sku ..." />)}
        </Form.Item>
      </Col>,
      <Col span={7} className="col-lab-1">
        <Form.Item label={`Price`}>
          {getFieldDecorator(`price`, {
            rules: [
              {
                required: true,
                message: 'Input something!',
              },
            ],
          })(<Input placeholder="enter price here ..." />)}
        </Form.Item>
      </Col>,
      <Col span={7} className="col-lab-1">
        <Form.Item label={`Quantity`}>
          {getFieldDecorator(`quantity`, {
            rules: [
              {
                required: true,
                message: 'Input something!',
              },
            ],
          })(<Input placeholder="enter quantity ..." />)}
        </Form.Item>
      </Col>,
      <Col span={7} className="col-lab-1">
        <Form.Item label={` Stock`}>
          <Select defaultValue="lucy">
            <OptGroup label="Manager">
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </OptGroup>
            <OptGroup label="Engineer">
              <Option value="Yiminghe">yiminghe</Option>
            </OptGroup>
          </Select>
        </Form.Item>
      </Col>,
      <Col span={7} className="col-lab-1">
        <Form.Item label={`Length`}>
          {getFieldDecorator(`length`, {
            rules: [
              {
                required: true,
                message: 'Input something!',
              },
            ],
          })(<Input placeholder="enter length ..." />)}
        </Form.Item>
      </Col>,
      <Col span={7} className="col-lab-1">
        <Form.Item label={`Width`}>
          {getFieldDecorator(`sku`, {
            rules: [
              {
                required: true,
                message: 'Input something!',
              },
            ],
          })(<Input placeholder="enter width ..." />)}
        </Form.Item>
      </Col>,
      <Col span={7} className="col-lab-1">
        <Form.Item label={` Country of Manufacture`}>
          <Select defaultValue="lucy">
            <OptGroup label="Manager">
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </OptGroup>
            <OptGroup label="Engineer">
              <Option value="Yiminghe">yiminghe</Option>
            </OptGroup>
          </Select>
        </Form.Item>
      </Col>,
      <Col span={7} className="col-lab-1">
        <Form.Item label={`Upload video or image`}>
          <Upload {...props}>
            <Button>
              <Icon type="upload" /> Upload Image
      </Button>
          </Upload>
        </Form.Item>
      </Col>
    );
    return children;
    console.log(children)
  }

  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  render() {
    return (
      <div>
        <PageHeader className="product_header">

        </PageHeader>
        <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
          <Row gutter={24}>{this.getFields()}</Row>
          <Row>

            <Col className="formup" span={24} style={{ textAlign: 'right' }}>
              {/* <Button type="primary" htmlType="submit">
              </Button> */}
              <div className="butn">
              <DrawerForm/>
              <Dropdown.Button className="add_pro" overlay={menu} icon={<Icon type="down" />} htmlType="submit">
                Add Product
                      </Dropdown.Button>
              <Button className="clear" style={{ marginLeft: 8 }} onClick={this.handleReset}>
                Clear
              </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Form.create({ name: 'advanced_search1' })(AddProduct);
