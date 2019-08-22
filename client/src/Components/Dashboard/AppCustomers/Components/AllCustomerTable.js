import React from "react";
import { Table, Select, Divider, Row, Col } from "antd";
const Option = Select.Option;

const columns = [
  {
    title: "Name",
    dataIndex: "name"
  },
  {
    title: "Age",
    dataIndex: "age"
  },
  {
    title: "Address",
    dataIndex: "address"
  }
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  });
}

class AllCustomerTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      paginationValue: {
        pageSize: '100'
      },
    };
  }

  onSelectChange = selectedRowKeys => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  handlePaginationChange = e => {
    var get = e;
    this.setState({
      paginationValue: {
        pageSize: get
      }
    });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      selections: [
        {
          key: "all-data",
          text: "Select All Data",
          onSelect: () => {
            this.setState({
              selectedRowKeys: [...Array(46).keys()] // 0...45
            });
          }
        },
        {
          key: "odd",
          text: "Select Odd Row",
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          }
        },
        {
          key: "even",
          text: "Select Even Row",
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          }
        }
      ]
    };
    return (
      <div>
        <Row className='second-header' style={{paddingBottom: '20px'}}>
          <Col>
            <Select className="action-selector" style={{ float: "left", width: "20%"}}>
              <Option value="delete">Delete</Option>
            </Select>
          </Col>
          <Select
            className="selector"
            defaultValue="Select Per Page"
            onChange={this.handlePaginationChange}
            style={{ float: "right", width: "10%"}}
          >
            <Option value="20">20</Option>
            <Option value="30">30</Option>
            <Option value="50">50</Option>
            <Option value="100">100</Option>
          </Select>
        </Row>

        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={this.state.paginationValue.pageSize}
          scroll={{ y: 240 }} 
        />
      </div>
    );
  }
}

export default AllCustomerTable;
