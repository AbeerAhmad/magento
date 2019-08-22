import React from "react";
import AppCategoryMenus from "../AppCategories/AppCategoryMenus";
import AppFeatureMenus from "../AppFeatures/AppFeatureMenus";
import AppThemeMenus from "../AppThemes/AppThemeMenus";
import AppStoreMenus from "../AppStores/AppStoreMenus";
import AppSaleMenus from "../AppSales/AppSaleMenus";
import AppLayoutMenus from "../AppLayout/AppLayoutMenus";
import AppReportMenus from "../AppReports/AppReportMenus";
import AppSettingMenus from "../AppSettings/AppSettingMenus";
import { Layout } from "antd";
import AppCustomerMenus from './../AppCustomers/AppCustomerMenus';

class DrawerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Title"
    };
  }
  showCategories = () => {
    if (this.props.selectedMenu === "appCategories") {
      return <AppCategoryMenus {...this.props} />;
    } else if (this.props.selectedMenu === "appAccounts") {
      return <AppCustomerMenus {...this.props} />;
    } else if (this.props.selectedMenu === "appFeatures") {
      return <AppFeatureMenus {...this.props} />;
    } else if (this.props.selectedMenu === "appTheme") {
      return <AppThemeMenus {...this.props} />;
    } else if (this.props.selectedMenu === "appStores") {
      return <AppStoreMenus {...this.props} />;
    } else if (this.props.selectedMenu === "appSales") {
      return <AppSaleMenus {...this.props} />;
    } else if (this.props.selectedMenu === "appLayout") {
      return <AppLayoutMenus {...this.props} />;
    } else if (this.props.selectedMenu === "appReports") {
      return <AppReportMenus {...this.props} />;
    } else if (this.props.selectedMenu === "appSettings") {
      return <AppSettingMenus {...this.props} />;
    }
  };

  static getDerivedStateFromProps(props, state) {
    let title = "Title";
    if (props.selectedMenu === "appCategories") {
      title = "Categories";
    } else if (props.selectedMenu === "appAccounts") {
      title = "Account";
    } else if (props.selectedMenu === "appFeatures") {
      title = "Features";
    } else if (props.selectedMenu === "appTheme") {
      title = "Theme";
    } else if (props.selectedMenu === "appStores") {
      title = "Store";
    } else if (props.selectedMenu === "appSales") {
      title = "Sales";
    } else if (props.selectedMenu === "appLayout") {
      title = "Layout";
    } else if (props.selectedMenu === "appReports") {
      title = "Reports";
    } else if (props.selectedMenu === "appSettings") {
      title = "Settings";
    }
    return {
      ...state,
      title
    };
  }

  render() {
    return (
      <Layout.Sider width={200} style={{ background: "#fff" }}>
        {this.showCategories()}
      </Layout.Sider>
    );
  }
}

export default DrawerMenu;

// {
//   /* <div>
// <Drawer
//   placement='left'
//   getContainer='#menuDrawer'
//   mask={false}
//   title={this.state.title}
//   onClose={this.props.closeMenuDetailDrawer}
//   visible={this.props.isOpen}
//   width={400}
// >
//   {this.showCategories()}
// </Drawer>
// </div> */
// }
