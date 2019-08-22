import {
  login_failed,
  login_loading,
  login_success
} from "../Actions/authentication";

import { message } from "antd";
import axios from "axios";
import { baseUrl, verifyToken } from "../../shared";


  const LoginActionCreater = creds => dispatch=>{
  dispatch(login_loading());
 
  axios
    .post(baseUrl + "users/login", creds)
    .then(res => {
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        const user = verifyToken();

        if (user) {
          dispatch(login_success(user));
          message.success("Hello " + user.name);
        } else {
          message.error("Some thing went wrong.........");
          dispatch(login_failed("Some thing went wrong"));
        }
      }
    })
    .catch(() => {
      message.error("Some thing went wrong.........");
      dispatch(login_failed("Some thing went wrong"));
    });
};

export default LoginActionCreater;
