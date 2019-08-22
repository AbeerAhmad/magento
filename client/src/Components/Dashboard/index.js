import React from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import { Switch } from "react-router-dom";
import { AppsList } from "../../shared";
import DrawerMenu from "./DrawerMenu";
import Private from "../PrivateRoute";
import Orders from "./AppSales/order/SalesOrder";
import Invoice from "./AppSales/invoices/Invoices";
import Product from './AppProducts/products';
import AddProduct from './AppProducts/add_products';
import ViewOrder from "./AppSales/order/vieworder/ViewOrder";
import allstore from './Store/Allstore/allstore';
import newstore from './Store/Allstore/newstore/newstore';
import Transaction from './AppSales/transaction/transaction'
import UserRoles from './AppSettings/UserRoles/UserRoles'
import AllUsers from "./AppSettings/AllUsers";
import EditUser from './AppSettings/EditUsers/EditUsers'
import AddUserRole from './AppSettings/UserRoles/addUserRole';
import AppAccounts from './AppCustomers/AllCustomers';
import NowOnline from './AppCustomers/NowOnline';
import CustomerGroups from './AppCustomers/CustomersGroups';
import AddCustomer from './AppCustomers/AddCustomer';
import CreateOrder from "./AppSales/order/CreateOrder"
import OrderStatus from './Store/OrderStatus/order_status'
import NewOrderStatus from './Store/OrderStatus/NewStatus/newStatus'
import Dispatches from "./AppSales/Dispatches/dispatches";
import CreateDispatch from "./AppSales/Dispatches/CreateShipments";
import View from "./AppSales/Dispatches/view";
import BillingAgreements from './AppSales/BillingAgreement/billagreement'
import Signup from '../Signup/Signup'

class AppDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      app: {},
      selectedKey: "appDashboard",
      menuDetailDrawerisOpen: false
    };
  }

  openMenuDetailDrawer = () => this.setState({ menuDetailDrawerisOpen: true });
  closeMenuDetailDrawer = () =>
    this.setState({ menuDetailDrawerisOpen: false });

  changeTheme = (appName, selectedTheme) => {
    const app = AppsList.find(app => app.appName === appName);
    app.selectedTheme = selectedTheme;
    this.setState({ app });
  };

  changeProfRoute = key => this.setState({ selectedKey: key });

  openAndroidModal = () => this.setState({ isAndroidModalOpen: true });
  closeAndroidModal = () => this.setState({ isAndroidModalOpen: false });

  openAppleModal = () => this.setState({ isAppleModalOpen: true });
  closeAppleModal = () => this.setState({ isAppleModalOpen: false });

  componentDidMount() {
    const app = AppsList.find(app => app.appName === "App A");
    this.setState({
      app
    });
  }

  collapseSidebar = broken => this.setState({ isCollapsed: broken });

  // profRouteRenderer = () => {
  //   const { app } = this.state;
  //   const { selectedKey } = this.state;
  //   if (selectedKey === "appCategories") return <AppCategories app={app} />;
  //   if (selectedKey === "appAccounts") return <AppAccounts app={app} />;
  //   if (selectedKey === "appTheme") return <AppTheme app={app} />;
  //   if (selectedKey === "appFeatures") return <AppFeatures app={app} />;
  // };

  render() {
    return (
      <Layout>
        <Layout.Header
          style={{ display: "flex", justifyContent: "center" }}
          className='header'
        >
          <div className='logo' />
          <Sidebar changeProfRoute={this.changeProfRoute} />
        </Layout.Header>
        <Layout.Content>
          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <DrawerMenu
              selectedMenu={this.state.selectedKey}
              changeRoute={this.ProfRouteRenderer}
            />
            <Layout.Content style={{ padding: "0 24px", minHeight: 280 }}>
              <Switch>
                <Private
                  exact
                  path='/dashboard/sales/orders/:key'
                  component={ViewOrder}
                />
                <Private
                  exact
                  path='/dashboard/sales/orders'
                  component={Orders}
                />
                <Private
                  exact
                  path='/dashboard/sales/invoices'
                  component={Invoice}
                />
                <Private
                  exact
                  path='/dashboard/sales/view'
                  component={ViewOrder}
                />

                <Private
                  exact
                  path='/dashboard/catalog/products'
                  component={Product}
                />
                <Private
                  exact
                  path='/dashboard/catalog/products/add_products'
                  component={AddProduct}
                />
                <Private
                  exact
                  path='/dashboard/sales/transaction'
                  component={Transaction}
                />
                <Private
                  exact
                  path='/dashboard/sales/createorder'
                  component={CreateOrder}
                />



                <Private
                  exact
                  path='/dashboard/store/all_stores'
                  component={allstore}
                />
                <Private
                  exact
                  path='/dashboard/stores/new_store'
                  component={newstore}
                />
                <Private
                  exact
                  path='/dashboard/setting/allusers'
                  component={AllUsers}
                />
                <Private
                  exact
                  path='/dashboard/setting/userroles'
                  component={UserRoles}
                />
                <Private
                  exact
                  path='/dashboard/setting/user/edituser/:key'
                  component={EditUser}
                />
                <Private
                  exact
                  path='/dashboard/setting/roles/adduserrole'
                  component={AddUserRole}
                />
                <Private
                  exact
                  path='/dashboard/store/all_stores/:id'
                  component={newstore}
                />

                <Private
                  exact
                  path='/dashboard/customers/all'
                  component={AppAccounts}
                />
                <Private
                  exact
                  path='/dashboard/customers/online'
                  component={NowOnline}
                />
                <Private
                  exact
                  path='/dashboard/customers/groups'
                  component={CustomerGroups}
                />
                <Private
                  exact
                  path='/dashboard/customers/add'
                  component={AddCustomer}
                />
                <Private
                  exact
                  path='/dashboard/store/order_status'
                  component={OrderStatus}
                />
                <Private
                  exact
                  path='/dashboard/store/order_status/create_new'
                  component={NewOrderStatus}
                />
                <Private
                  exact
                  path='/dashboard/sales/dispatches'
                  component={Dispatches} />
                <Private
                  exact
                  path='/dashboard/sales/dispatches/createdispatch'
                  component={CreateDispatch} />
                <Private
                  exact
                  path={'/dashboard/dispatch/dispatchDetails/:id'}
                  component={View}
                />
                <Private
                  exact
                  path={'/dashboard/sales/billingagreement'}
                  component={BillingAgreements}
                />
              
              </Switch>
            </Layout.Content>
          </Layout>
        </Layout.Content>
      </Layout>
    );
  }
}

export default AppDetail;

//  <div>
//         <Layout style={{ minHeight: "100vh" }}>
//           <Layout.Sider
//             style={{ zIndex: this.state.menuDetailDrawerisOpen ? "" : "2000" }}
//             collapsed
//           >
//             <Sidebar
//               openDrawer={this.openMenuDetailDrawer}
//               changeProfRoute={this.changeProfRoute}
//             />
//           </Layout.Sider>
//           <Layout.Content>
//             <Layout.Header />
//             /* <Row style={{ marginBottom: "5px" }}>
//               <Col span={24}>
//                 <PageHeader
//                   style={{
//                     borderRadius: "10px"
//                   }}
//                   title={
//                     <Typography.Text>{this.state.app.appName}</Typography.Text>
//                   }
//                 />
//               </Col>
//             </Row> */
//             <Switch>
//               <Private
//                 exact
//                 path='/dashboard/sales/orders'
//                 component={Orders}
//               />
//               <Private
//                 exact
//                 path='/dashboard/sales/invoices'
//                 component={Invoice}
//               />
//             </Switch>
//             <div id='menuDrawer'>
//               <DrawerMenu
//                 app={this.state.app}
//                 openMenuDetailDrawer={this.openMenuDetailDrawer}
//                 closeMenuDetailDrawer={this.closeMenuDetailDrawer}
//                 isOpen={this.state.menuDetailDrawerisOpen}
//                 selectedMenu={this.state.selectedKey}
//                 changeRoute={this.ProfRouteRenderer}
//               />
//             </div>
//           </Layout.Content>
//         </Layout>
//         <Modal
//           title='Android'
//           visible={this.state.isAndroidModalOpen}
//           onCancel={this.closeAndroidModal}
//         />
//         <Modal
//           title='IOS'
//           visible={this.state.isAppleModalOpen}
//           onCancel={this.closeAppleModal}
//         />
//       </div>
