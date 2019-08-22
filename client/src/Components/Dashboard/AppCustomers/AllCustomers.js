import React from "react";
import './style.css';
import AllCustomerTable from './Components/AllCustomerTable';
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
} from "antd";
import { Link } from "react-router-dom";
const Option = Select.Option;
const { OptGroup } = Select;
const Search = Input.Search;

class AppAccounts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    };
  }
  render() {



    return (
      <div>
        <PageHeader className="customer-header"
          extra={[
            <Link to='/dashboard/customers/add'><Button key="1">Add New Customer</Button></Link>
          ]} >
        </PageHeader>

        <Divider />

        <Row>
          <Col span={10}>
            <Search
              placeholder="Search by keyword"
              style={{ width: '50%' }}
            />
          </Col>
          <Col span={2} offset={12}>
            <Button><Icon type="export" />Export</Button>
          </Col>
        </Row>

        <Divider />

        <Row>
          <Col span={24}>
            <AllCustomerTable />
          </Col>
        </Row>

      </div>
    );
  }
}
export default AppAccounts;
