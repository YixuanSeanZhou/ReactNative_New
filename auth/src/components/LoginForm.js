import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {

  //state
  state = { email: '', password: '', error: '', lodaing: false };

  // Log the user in
  onButtonPressed() {
    const { email, password } = this.state;

    // reset the error stage
    this.setState({ error: '', loading: true });

    // return a promise
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
    }

  onLoginFail() {
    this.setState({
      error: 'Authenticaltion Failed',
      loading: false
    });
  }
  onLoginSuccess() {
    // Update state
    // clean up the LoginForm
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPressed.bind(this)} text="Log IN" />
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
        <Input
          placeholder="user@email.com"
          label="Email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        </CardSection>

        <CardSection>
          <Input
            placeholder="password"
            secureTextEntry
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
