import React from 'react';
import {
    Row,
    Col,
    Button,
    Divider,
    Input,
    Icon,
    PageHeader,
    Dropdown,
    Select,
    Table
} from "antd";
const Option = Select.Option;
const Search = Input.Search;
const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        width: 150,
    },
    {
        title: 'Group',
        dataIndex: 'group',
        width: 150,
    },
    {
        title: 'Tax Class',
        dataIndex: 'taxClass',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <a href="#">Edit</a>
                <Divider type="vertical" />
                <a href="#">Delete</a>
            </span>
        ),
    },


];
const data = [
    {
        key: 0,
        id: 0,
        group: 'Not Logged In',
        taxClass: 'Retail Customer',
    },
    {
        key: 1,
        id: 1,
        group: 'General',
        taxClass: 'Retail Customer',
    },
    {
        key: 2,
        id: 2,
        group: 'Wholesale',
        taxClass: 'Reatail Customer',
    },
    {
        key: 3,
        id: 3,
        group: 'Retailer',
        taxClass: 'Reatail Customer',
    }
];



class CustomerGroups extends React.Component {
    state = {
        value: '100'
    }
    handleChange = (value) => {
        var get = value;
        this.setState({
            value: get
        })
    }


    render() {

        return (<div>
            <PageHeader className="customer-header"
                extra={[
                    <Button key="3">Add New Customer Group</Button>
                ]} >
            </PageHeader>

            <Divider />

            <Row>
                <Col span={10}>
                    <Search
                        placeholder="type keywords here"
                        style={{ width: 400 }}
                    />
                </Col>
                <Col span={2} offset={12}>
                    <Button><Icon type="export" />Export</Button>
                </Col>
            </Row>

            <Divider />

            <Row>
                <Col span={24}>
                    <div>
                        <Row>

                            <Col span={6}>
                                <h3>{data.length} records found</h3>
                            </Col>


                            <Col span={8} offset={10}>
                                <Select className="slcter" defaultValue="Select Per Page" onChange={this.handleChange.bind(this)} style={{ float: 'right', width: 200 }}>
                                    <Option value="20">20</Option>
                                    <Option value="30">30</Option>
                                    <Option value="50">50</Option>
                                    <Option value="100">100</Option>
                                </Select>

                            </Col>

                        </Row>
                        <div className="table">
                            {/* <Table className="product_table" columns={columns} dataSource={data} pagination={{ pageSize: this.state.value }} scroll={{ y: 240 }} /> */}
                            <Table className="product_table" pagination={{ pageSize: this.state.value }} columns={columns} dataSource={data} scroll={{ y: 240 }} />
                        </div>
                    </div>
                </Col>
            </Row>

        </div>);
    }
}

export default CustomerGroups;