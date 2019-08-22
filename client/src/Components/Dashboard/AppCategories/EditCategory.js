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
  Icon,
  Switch
} from "antd";

class EditCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: "",
      categoryVariation: [],
      addCurrency: false,
      currencyName: "",
      currencyPrice: "",
      currencies: [],
      isModalInitialized: false
    };
  }

  getCurrency = currencyName =>
    this.state.currencies.filter(
      currency => currency.currencyName === currencyName
    )[0];

  priceChageHandler = evt => {
    let currency = this.getCurrency(
      evt.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.getAttribute(
        "data-currency"
      )
    );
    const size = evt.target.getAttribute("currency-size");
    currency.variation.map(vari => {
      if (vari.size === size) {
        vari.price = evt.target.value;
      }
      return vari;
    });
  };

  onVariationChange = isAvailable => evt => {
    let currencies = this.state.currencies;
    let currencyName = evt.target.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.getAttribute(
      "data-currency"
    );
    let currenVariation = evt.target.getAttribute("value");

    // finding currency to edit
    let currency = this.getCurrency(currencyName);

    //   finding the index of the edited currency
    let indexOfCurrency = currencies.findIndex(
      currency => currency.currencyName === currencyName
    );

    if (isAvailable) {
      //   removing currency variation
      currency.variation = currency.variation.filter(
        size => size.size !== currenVariation
      );

      currencies[indexOfCurrency] = currency;
    } else {
      //   adding  currency variation
      currency.variation.push({
        size: currenVariation,
        price: 0
      });

      currencies[indexOfCurrency] = currency;
    }

    this.setState({ currencies: currencies });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!prevState.isModalInitialized && nextProps.isEditModalOpen) {
      return {
        ...prevState,
        isModalInitialized: true,
        categoryName: nextProps.category.name,
        currencies: nextProps.category.currencies
      };
    }
    return prevState;
  }

  currencyAvailabliyHandler = currency => () => {
    let currencies = this.state.currencies.map(cur => {
      if (cur.currencyName === currency.currencyName) {
        cur.isAvailable = !cur.isAvailable;
      }
      return cur;
    });
    this.setState({ currencies });
  };

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
      render: (variation, currency) => {
        return (
          <div className={currency.isAvailable ? "" : "disabled"}>
            {this.props.currencyVariationList.map(size => (
              <div key={size}>
                <Row style={{ marginBottom: "5px" }}>
                  <Col span={12}>
                    <Tag
                      onClick={this.onVariationChange(
                        Boolean(variation.find(vari => vari.size === size))
                      )}
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
          </div>
        );
      }
    },
    {
      key: "action",
      title: "Action",
      render: record => (
        <Button
          data-currency={record.currencyName}
          onClick={() => this.removeCurrency(record.currencyName)}
          type="danger"
          size="small"
        >
          <Icon type="delete" />
          Remove
        </Button>
      )
    },
    {
      key: "availablity",
      title: "Availablity",
      render: currency => (
        <span key={currency.key}>
          <Switch
            checked={currency.isAvailable}
            onChange={this.currencyAvailabliyHandler(currency)}
          />
        </span>
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
      currencies: [],
      isModalInitialized: false
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
    this.setState(
      state => ({ addCurrency: !state.addCurrency }),
      () => {
        if (!this.state.addCurrency) {
          console.log("save currency");
          this.setState(state => ({
            currencies: [
              ...state.currencies,
              {
                variation: this.state.categoryVariation,
                currencyName: this.state.currencyName,
                currencyPrice: this.state.currencyPrice,
                key: this.state.currencies.length + 1,
                isAvailable: true
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
    this.props.closeEditModal();
  };
  onOkHandler = () => {
    this.props.editCategory({
      name: this.state.categoryName,
      currencies: this.state.currencies
    });
    this.resetSate();
    this.props.closeEditModal();
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
          visible={this.props.isEditModalOpen}
          onCancel={this.cancelHandler}
          title="Edit Category"
          maskClosable={false}
          width="80%"
          onOk={this.onOkHandler}
        >
          <Row>
            <Col span={24}>
              <Input
                addonBefore="Category Name"
                name="categoryName"
                disabled
                placeholder="Enter Category Name"
                value={this.state.categoryName}
                onChange={this.inputChangehandler}
                type="text"
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col>
              <b className="toUppercase">Total Currencies : </b>
              <span style={{ marginLeft: "10px" }}>
                {this.state.currencies ? this.state.currencies.length : 0}
              </span>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col>
              <b className="toUppercase">Available Currencies : </b>
              <span style={{ marginLeft: "10px" }}>
                {this.state.currencies &&
                  this.state.currencies.filter(currency => currency.isAvailable)
                    .length}
              </span>
            </Col>
          </Row>
          <div
            style={{
              display: this.state.addCurrency ? "block" : "none"
            }}
          >
            <Divider>Add Currency</Divider>
            <Row gutter={16}>
              <Col className="input-top-margin" sm={24} md={12}>
                <Input
                  type="text"
                  addonBefore="Name"
                  placeholder="Enter Currency Name"
                  name="currencyName"
                  value={this.state.currencyName}
                  onChange={this.inputChangehandler}
                />
              </Col>
              <Col className="input-top-margin" sm={24} md={12}>
                <Input
                  type="number"
                  min="1"
                  disabled
                  value={this.state.currencyPrice}
                  addonBefore="Price"
                  placeholder="Enter Currency Name"
                  name="currencyPrice"
                  onChange={this.inputChangehandler}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "5px" }}>
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
          {this.state.currencies && this.state.currencies.length !== 0 && (
            <Row>
              <Col span={24}>
                <Table
                  bordered
                  scroll={{x:true}}
                  onRow={record => {
                    if (!record.isAvailable) {
                      return { style: { backgroundColor: "#F5F5F5" } };
                    }
                  }}
                  style={{ marginTop: "5px" }}
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
export default EditCategory;
