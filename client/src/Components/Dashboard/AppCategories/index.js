import React from "react";
import { Row, Col, Typography, Button, Divider, Table } from "antd";
import { CategoriesModel } from "../../../shared";
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";

class AppCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      isEditModalOpan: false,
      categoriesModel: new CategoriesModel(),
      categoryToEdit: {},
      categories: []
    };
  }
  addCategory = category => {
    // adding new Category
    category.appName = this.props.app.appName;
    this.state.categoriesModel.addNewCategory(category);
    this.closeModal();
  };
  closeModal = () => this.setState({ isModalOpen: false });
  openModal = () => this.setState({ isModalOpen: true });

  openEditModal = () => this.setState({ isEditModalOpan: true });
  closeEditModal = () => this.setState({ isEditModalOpan: false });


  onRowClickHandler = (category)=>()=>{
    this.setState({ categoryToEdit: category, isEditModalOpan: true });
  }

  tableColumns = [
    {
      key: "categoryName",
      title: "Name",
      dataIndex: "name"
    },
    {
      key: "currencies",
      title: "Currencies",
      render: record => record.currencies.length
    }
  ];

  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <Typography.Title>My Categories</Typography.Title>
          </Col>
          <Col>
            <Divider />
          </Col>
        </Row>
        <Row type="flex" justify="end">
          <Col className="bottomMargin">
            <Button
              onClick={this.openModal}
              shape="circle"
              size="large"
              type="primary"
              icon="plus"
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col>
            <Table
              dataSource={this.state.categoriesModel.getCategory(
                this.props.app.appName
              )}
              pagination={false}
              scroll={{x:true}}
              columns={this.tableColumns}
              rowKey={record => record._id}
              onRow={(record) => ({
                onClick: this.onRowClickHandler(record)
              })}
            />
          </Col>
        </Row>
        <AddCategory
          closeModal={this.closeModal}
          isModalOpen={this.state.isModalOpen}
          addCategory={this.addCategory}
          currencyVariationList={
            this.state.categoriesModel.currencyVariationList
          }
        />
        <EditCategory
          isEditModalOpen={this.state.isEditModalOpan}
          closeEditModal={this.closeEditModal}
          category={this.state.categoryToEdit}
          currencyVariation={this.state.categoriesModel.currencyVariation}
          editCategory={this.state.categoriesModel.editCategory}
          currencyVariationList={
            this.state.categoriesModel.currencyVariationList
          }
        />
      </div>
    );
  }
}
export default AppCategories;
