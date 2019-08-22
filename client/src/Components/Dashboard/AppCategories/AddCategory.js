import React from "react";
import {
  Modal,
  Input,
  Checkbox,
  Col,
  Row,
  Button,
  Table,
  Divider,
  Tag,
  Icon
} from "antd";
class AddCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: "",
      categoryVariation: [],
      addCurrency: false,
      currencyName: "",
      currencyPrice: "",
      currencies: []
    };
  }
  tableColumns = [
    {
      key: "name",
      title: "Currency Name",
      dataIndex: "currencyName"
    },
    {
      key: "price",
      title: "Currency Price",
      dataIndex: "currencyPrice"
    },
    {
      key: "variations",
      title: "Variation",
      dataIndex: "variation",
      render: variation => (
        <span>
          {this.props.currencyVariationList.map(size => (
            <div key={size}>
              <Row style={{ marginBottom: "5px" }}>
                <Col span={12}>
                  <Tag
                    color={
                      variation.find(vari => vari.size === size)
                        ? "green"
                        : "red"
                    }
                    value={size}
                  >
                    {size.toUpperCase()}
                  </Tag>
                </Col>
                <Col
                  style={{
                    display: variation.find(vari => vari.size === size)
                      ? "block"
                      : "none",
                    maxWidth: "100px"
                  }}
                  span={12}
                >
                  <Input
                    type="number"
                    onChange={this.priceChageHandler}
                    min={0}
                    disabled
                    placeholder="price"
                    currency-size={size}
                    addonBefore="$"
                    size="small"
                    defaultValue={
                      variation.find(vari => vari.size === size)
                        ? variation.find(vari => vari.size === size).price
                        : 0
                    }
                  />
                </Col>
              </Row>
            </div>
          ))}
        </span>
      )
    },
    {
      key: "action",
      title: "Action",
      render: record => (
        <Button
          onClick={() => this.removeCurrency(record.currencyName)}
          type="danger"
          size="small"
        >
          <Icon type="delete" />
          Remove
        </Button>
      )
    }
  ];
  resetSate = () =>
    this.setState({
      categoryName: "",
      categoryVariation: [],
      addCurrency: false,
      currencyName: "",
      currencyPrice: "",
      currencies: []
    });
  inputChangehandler = e => this.setState({ [e.target.name]: e.target.value });
  checkboxHandler = e => {
    if (e.target.checked) {
      this.setState(state => ({
        categoryVariation: [...state.categoryVariation, e.target.name]
      }));
    } else {
      this.setState(state => ({
        categoryVariation: state.categoryVariation.filter(
          name => name !== e.target.name
        )
      }));
    }
  };
  addCurrencyHandler = () => {
    const currencyVariations = this.state.categoryVariation.map(size => ({
      size: size,
      price: 0
    }));
    console.log(currencyVariations);
    this.setState(
      state => ({ addCurrency: !state.addCurrency }),
      () => {
        if (!this.state.addCurrency) {
          console.log("save currency");
          this.setState(state => ({
            currencies: [
              ...state.currencies,
              {
                variation: currencyVariations,
                currencyName: this.state.currencyName,
                currencyPrice: this.state.currencyPrice,
                key: this.state.currencies.length + 1
              }
            ],
            currencyName: "",
            currencyPrice: "",
            categoryVariation: []
          }));
        }
      }
    );
  };
  cancelHandler = () => {
    this.resetSate();
    this.props.closeModal();
  };
  onOkHandler = () => {
    this.props.addCategory({
      name: this.state.categoryName,
      currencies: this.state.currencies
    });
    this.resetSate();
  };
  removeCurrency = currencyName => {
    this.setState(state => ({
      currencies: state.currencies.filter(
        currency => currency.currencyName !== currencyName
      )
    }));
  };
  render() {
    return (
      <div>
        <Modal
          visible={this.props.isModalOpen}
          onCancel={this.cancelHandler}
          title="Add New Category"
          destroyOnClose={true}
          maskClosable={false}
          width="80%"
          onOk={this.onOkHandler}
        >
          <Row>
            <Col span={24}>
              <Input
                addonBefore="Category Name"
                name="categoryName"
                placeholder="Enter Category Name"
                value={this.state.categoryName}
                onChange={this.inputChangehandler}
                type="text"
              />
            </Col>
          </Row>
          <div
            style={{
              display: this.state.addCurrency ? "block" : "none",
              transition: "height 3s linear"
            }}
          >
            <Divider>Add Currency</Divider>
            <Row gutter={16}>
              <Col className="input-top-margin">
                <Input
                  type="text"
                  addonBefore="Name"
                  placeholder="Enter Currency Name"
                  name="currencyName"
                  value={this.state.currencyName}
                  onChange={this.inputChangehandler}
                />
              </Col>
            </Row>
            <Row className="input-top-margin">
              <Col style={{ display: "flex" }} span={24}>
                <div style={{ marginRight: "10px" }}>
                  <b style={{ marginLeft: "2px" }}>Variation</b>
                </div>
                <div>
                  <Checkbox
                    onChange={this.checkboxHandler}
                    checked={this.state.categoryVariation.includes("small")}
                    name="small"
                  >
                    Small
                  </Checkbox>
                  <Checkbox
                    checked={this.state.categoryVariation.includes("medium")}
                    onChange={this.checkboxHandler}
                    name="medium"
                  >
                    Medium
                  </Checkbox>
                  <Checkbox
                    checked={this.state.categoryVariation.includes("large")}
                    onChange={this.checkboxHandler}
                    name="large"
                  >
                    Large
                  </Checkbox>
                </div>
              </Col>
            </Row>
          </div>
          <Row type="flex" justify="end">
            <Col className="input-top-margin">
              <Button
                onClick={this.addCurrencyHandler}
                type="primary"
                size="small"
              >
                {this.state.addCurrency ? "Save Currency" : "Add Currency"}
              </Button>
            </Col>
          </Row>
          {this.state.currencies.length !== 0 && (
            <Row>
              <Col span={24}>
                <Table
                  className="input-top-margin"
                  scroll={{x:500}}
                  pagination={false}
                  dataSource={this.state.currencies}
                  columns={this.tableColumns}
                />
              </Col>
            </Row>
          )}
        </Modal>
      </div>
    );
  }
}
export default AddCategory;
