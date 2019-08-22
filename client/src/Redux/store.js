import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Login from "./Reducers/Login";
import OrderList from "./Reducers/orderlist";
import AllUsers from "./Reducers/allusers";
import SaveStore from './Reducers/saveStore';
import deleteStore from './Reducers/deleteStore';
import AllStore from './Reducers/AllStore';
import dispatch from './Reducers/dispatch'
import Signup from './Reducers/Signup'

const store = createStore(
  combineReducers({
    Login,
    OrderList,
    AllUsers,
    SaveStore,
    AllStore,
    deleteStore,
    dispatch,
    Signup,
  }),
  applyMiddleware(thunk)
);

export default store;
