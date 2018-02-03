import React, { Component } from 'react';
import { Provider } from "react-redux";

import store from "./store";

import Routes from "./routes";

class Entry extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>      
    );
  }
}

export default Entry;