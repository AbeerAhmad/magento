import React from "react";
import { Button } from "antd";

const CustomizeTheme = props => {
  const clickHandler = () => {
    props.customizingHandler();
  };
  return (
    <Button onClick={clickHandler}>
      {props.isCustomizing ? "Save" : "Customize"}
    </Button>
  );
};
export default CustomizeTheme;
