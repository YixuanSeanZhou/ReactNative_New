import React, { Component } from 'react';
import { connect } from 'react-redux';
// the view list
import { FlatList } from 'react-native';
import ListItem from './ListItem.js';

class LibraryList extends Component {
  renderItem(library) {
    //console.log(library.item.title);
    return <ListItem library={library} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={library => `${library.id}`}
      />
    );
  }
}

// take application state and provide them as props of connect
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

// connect() return a function and pass in LibraryList
export default connect(mapStateToProps)(LibraryList);
