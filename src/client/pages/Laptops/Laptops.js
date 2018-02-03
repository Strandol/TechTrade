import React, { Component } from "react";
import { View, Text } from "react-native";
import { Link } from "react-router-native";

class Laptops extends Component {
  render() {
    return (
      <View>
        <Text>----------------</Text>
        <Text>LAPTOPS PAGE</Text>
        <Link to="/laptops">
          <Text>Laptops</Text>
        </Link>
      </View>
    );
  }
}
export default Laptops;
