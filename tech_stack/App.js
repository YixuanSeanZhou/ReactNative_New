import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducer';
import { Header } from './src/componenets/common';
import LibraryList from './src/componenets/LibraryList.js';

export default class App extends React.Component {
  render() {
    return (
      // Provider only have one child
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header headerText="Tech Stack" />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}

//const styles = StyleSheet.create({
//  container: {
    //flex: 1,
//    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
//  },
// });
