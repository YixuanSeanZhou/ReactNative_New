import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Button, Card, CardSection, Spinner } from './src/components/common';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm.js';

class App extends React.Component {

  state = { loggedIn: null }

  // lifecycle method
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBaDlEdpF7T_0YbcJdtfie916nAMN2i4PY',
      authDomain: 'auth-2b1be.firebaseapp.com',
      databaseURL: 'https://auth-2b1be.firebaseio.com',
      projectId: 'auth-2b1be',
      storageBucket: 'auth-2b1be.appspot.com',
      messagingSenderId: '883740653332'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button text="LogOut" onPress={() => firebase.auth().signOut()} />
            </CardSection>
          </Card>
          );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Auth" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;
