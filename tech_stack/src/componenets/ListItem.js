import React, { Component } from 'react';
import { CardSection } from './common';
import { connect } from 'react-redux';
import {
  LayoutAnimation,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import * as actions from '../actions'

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text
          style={{ flex: 1 }}
          >{library.item.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library.item;

    return (
      <TouchableWithoutFeedback
      onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

// decision
const mapStateToProps = (state, ownProps) => {
  // ownProps is the access for its own props
  // ownProps = this.props inside the component
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return { expanded };
};

// first argument is to map state
export default connect(mapStateToProps, actions)(ListItem);
