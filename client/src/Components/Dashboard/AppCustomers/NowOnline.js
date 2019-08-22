import React from 'react';
import {
    Row,
    Col,
    Button,
    Divider,
    Input,
    Icon,
    Select,
    Table
} from "antd";
const Search = Input.Search;

const Option = Select.Option;

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        width: 150,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        width: 150,
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
];


const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}



class NowOnline extends React.Component {
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
        return (
            <div>
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
                                    <Select className="selector" defaultValue="Select Per Page" onChange={this.handleChange.bind(this)} style={{ float: 'right', width: 200 }}>
                                        <Option value="20">20</Option>
                                        <Option value="30">30</Option>
                                        <Option value="50">50</Option>
                                        <Option value="100">100</Option>
                                    </Select>

                                </Col>

                            </Row>
                            <div className="table">
                                {/* <Table className="product_table" columns={columns} dataSource={data} pagination={{ pageSize: this.state.value }} scroll={{ y: 240 }} /> */}
                                <Table className="now-online" pagination={{ pageSize: this.state.value }} columns={columns} dataSource={data} scroll={{ y: 240 }} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default NowOnline;