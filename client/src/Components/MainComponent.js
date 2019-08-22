import React from "react";
import { Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AppDetail from "./Dashboard";
import SignIn from "./SignIn";
import Private from "./PrivateRoute";
import Protected from "./ProtectedRoute";
import { verifyToken } from "../shared";
import { login_success } from "../Redux/Actions/authentication";
import Signup from "./Signup/Signup";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: ""
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let keys = ["/dashboard", "/"];
    const selectedKey = keys.find(key =>
      nextProps.location.pathname.toLowerCase().startsWith(key)
    );
    return {
      ...prevState,
      selectedKey
    };
  }

  componentDidMount() {
    const user = verifyToken();
    if (user) {
      this.props.dispatch(dispatch => dispatch(login_success(user)));
    }
  }

  render() {
    return (
      //  <div>
      //    <Layout>
      //     <Header>
      //       <Menu
      //         theme="dark"
      //         mode="horizontal"
      //         style={{ lineHeight: "64px" }}
      //         selectedKeys={[this.state.selectedKey]}
      //       >
      //         {this.props.user ? (
      //           <Menu.Item key="/dashboard">
      //             <Link to="/dashboard">
      //               <Icon type="dashboard" />
      //               <span>DASHBOARD</span>
      //             </Link>
      //           </Menu.Item>
      //         ) : (
      //           <Menu.Item key="/">
      //             <Link to="/">
      //               <Icon type="login" />
      //               <span>SING IN</span>
      //             </Link>
      //           </Menu.Item>
      //         )}
      //       </Menu>
      //     </Header>
      //     <Content>

      //     </Content>
      //   </Layout>
      // </div>

      <Switch>
        {/* <Private path='/dashboard/sales/orders' component={Orders} /> */}
        <Private path='/dashboard' component={AppDetail} />
        <Protected exact path='/' component={SignIn} />
        <Protected exact path='/signup' component={Signup} />

      </Switch>
    );
  }
}

const mapStateToProps = store => ({
  user: store.Login.user
});
export default withRouter(connect(mapStateToProps)(Main));
