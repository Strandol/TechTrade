import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

import Home from "../pages/Home";
import Laptops from "../pages/Laptops";

class Routes extends Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <StatusBar hidden={true}/>
          <Route exact path="/" component={Home} />
          <Route path="/laptops" component={Laptops} />
        </View>
      </NativeRouter>
    );
  }
}

export default Routes;
