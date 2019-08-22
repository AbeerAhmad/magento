import React from 'react';
import { Form, Row, Col, Input, Button, Icon } from 'antd';
import { Select } from 'antd';
import { Upload } from 'antd';
// import './add_products.css';
import { PageHeader, Dropdown, Menu } from 'antd';

const { Option, OptGroup } = Select;
class DrawerTabsData extends React.Component {
    state = {
        expand: false,
    };

    // To generate mock Form.Item
    drawerField() {
        // const count = this.state.expand ? 10 : 6;
        const { getFieldDecorator } = this.props.form;
        const children = [];
        children.push(
            <Col span={7} className="col-lab-1">
                <Form.Item label={`Attribute Code`}>
                    {getFieldDecorator(`Attribute Code`, {
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
                <Form.Item label={`Attribute Label`}>
                    {getFieldDecorator(`Attribute Label`, {
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
                <Form.Item label={`Required`}>
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
                <Form.Item label={`System`}>
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
                <Form.Item label={`Visible`}>
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
                <Form.Item label={`Scope`}>
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
                <Form.Item label={`Searchable`}>
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
             <Form.Item label={`Comparable`}>
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
          <Form.Item label={`Use in Layered Navigation`}>
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
                    <Row gutter={24}>{this.drawerField()}</Row>
                    <Row>

                        <Col span={24} style={{ textAlign: 'right' }}>
                            <Button type="primary" style={{ marginLeft: 8 }} htmlType="submit">
                                Apply Filter
              </Button>

                        </Col>
                    </Row>
                    <br />
                </Form>
            </div>
        );
    }
}

export default Form.create({ name: 'advanced_search' })(DrawerTabsData);
