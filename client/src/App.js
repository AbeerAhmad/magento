import React from "react";
import Main from "./Components/MainComponent";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import history from './history/history'

function App() {
  return (
    <Router history = {history}>
      <Provider store={store}>
        <Main />
      </Provider>
    </Router>
  );
}

export default App;
