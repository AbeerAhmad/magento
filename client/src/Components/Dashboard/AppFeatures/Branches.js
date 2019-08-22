import React from "react";
import { Table, Button, Popconfirm } from "antd";
class Branches extends React.Component {
  removeBranch = record => {
    this.props.app.appFeatures.branches = this.props.app.appFeatures.branches.filter(
      branch => branch.id !== record.id
    );
    this.props.updateBranches();
  };

  tableColumns = [
    {
      key: "name",
      title: "Name",
      dataIndex: "name"
    },
    {
      key: "type",
      title: "Type",
      dataIndex: "type"
    },
    {
      key: "incharg",
      title: "Incharge",
      dataIndex: "incharge"
    },
    {
      key: "action",
      title: "Remove",
      render: record => (
        <Popconfirm
          onConfirm={() => this.removeBranch(record)}
          title={`Are you sure you want to remove "${record.name}"`}
        >
          <Button size="small" type="danger" icon="delete">
            Remove
          </Button>
        </Popconfirm>
      )
    }
  ];

  render() {
    return (
      <Table
        rowKey={record => {
          return record.id;
        }}
        scroll={{x:400}}
        dataSource={this.props.branches}
        columns={this.tableColumns}
        pagination={false}
      />
    );
  }
}
export default Branches;
