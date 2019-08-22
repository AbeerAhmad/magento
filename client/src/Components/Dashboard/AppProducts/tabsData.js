import React from 'react';
import { Form, Row, Col, Input, Button, Icon } from 'antd';
import { Select } from 'antd';
import { Upload } from 'antd';
import './add_products.css';
import { PageHeader, Dropdown, Menu } from 'antd';
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
class TabsData extends React.Component {
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
        <span>ID</span>
        <Form.Item label={`from`}>
          {getFieldDecorator(`from`, {
            rules: [
              {
                required: true,
                message: 'Input something!',
              },
            ],
          })(<Input placeholder="" />)}
        </Form.Item>
        <Form.Item label={`to`}>
          {getFieldDecorator(`to`, {
            rules: [
              {
                required: true,
                message: 'Input something!',
              },
            ],
          })(<Input placeholder="" />)}
        </Form.Item>
      </Col>,
      <Col span={7} className="col-lab-1">
      <span>Price</span>
      <Form.Item label={`from`}>
        {getFieldDecorator(`from`, {
          rules: [
            {
              required: true,
              message: 'Input something!',
            },
          ],
        })(<Input placeholder="" />)}
      </Form.Item>
      <Form.Item label={`to`}>
        {getFieldDecorator(`to`, {
          rules: [
            {
              required: true,
              message: 'Input something!',
            },
          ],
        })(<Input placeholder="" />)}
      </Form.Item>
    </Col>,
    <Col span={7} className="col-lab-1">
    <span>Quantity</span>
    <Form.Item label={`from`}>
      {getFieldDecorator(`from`, {
        rules: [
          {
            required: true,
            message: 'Input something!',
          },
        ],
      })(<Input placeholder="" />)}
    </Form.Item>
    <Form.Item label={`to`}>
      {getFieldDecorator(`to`, {
        rules: [
          {
            required: true,
            message: 'Input something!',
          },
        ],
      })(<Input placeholder="" />)}
    </Form.Item>
  </Col>,
      <Col span={7} className="col-lab-1">
        <Form.Item label={`Store View`}>
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
        <Form.Item label={`Name`}>
          {getFieldDecorator(`Name`, {
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
      <Form.Item label={`Type`}>
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
   <Form.Item label={`Status`}>
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
  <Form.Item label={`Visibilty`}>
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
        <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
          <Row gutter={24}>{this.getFields()}</Row>
          <Row>

            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type="danger" style={{ marginLeft: 8 }} htmlType="submit">
                Apply Filter
              </Button>
              
            </Col>
          </Row>
          <br/>
        </Form>
      </div>
    );
  }
}

export default Form.create({ name: 'advanced_search' })(TabsData);
