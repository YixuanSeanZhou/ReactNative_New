import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {

  //state
  state = { email: '', password: '' };


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
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
