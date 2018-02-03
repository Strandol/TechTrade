import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { withRouter } from "react-router";
import { Link } from "react-router-native";

import styles from "./styles";

class Home extends Component {
  state = {};

  openSignupPage = () => {
    this.props.history.push('/signup');
  }

  render() {
    let { login, password } = this.state;

    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>Login</Text>
        <View>
          <Text>Login</Text>
          <TextInput
            style={styles.input}
            onChangeText={login => this.setState({ login })}
            value={login}
          />
          <Text>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={password => this.setState({ password })}
            value={password}
          />
          <Button title="Login" onPress={() => {}} />
          <Button title="Signup" onPress={this.openSignupPage} />
        </View>
      </View>
    );
  }
}

export default withRouter(Home);
