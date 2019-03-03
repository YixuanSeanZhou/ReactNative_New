import React from 'react';
import { Text, View } from 'react-native';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm.js';
import { Header } from './src/components/common';

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA1AiyyjRaJdPB7jrhnERrptET-eNcLwww',
      authDomain: 'manager-96f86.firebaseapp.com',
      databaseURL: 'https://manager-96f86.firebaseio.com',
      projectId: 'manager-96f86',
      storageBucket: 'manager-96f86.appspot.com',
      messagingSenderId: '51141863732'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Header headerText="Login" />
        <LoginForm />
      </Provider>
    );
  }
}
