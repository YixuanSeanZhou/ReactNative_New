import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';
import firebase from 'friebase';

class LoginForm extends Component {

  //state
  state = { email: '', password: '' };

  // Log the user in
  onButtonPressed() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password);
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

        <CardSection>
          <Button onPress ={this.onButtonPressed.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
