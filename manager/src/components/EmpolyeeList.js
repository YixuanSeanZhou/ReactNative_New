import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem.js';

class EmpolyeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this componnet will be
    // rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    console.log(this.props);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  // access employess and convert the object returned from firebase to employess
  const employees = _.map(state.employees, (val, uid) => {
      return { ...val, uid };
      // result:
      // { shift: Monday, name: .... phone: ... uid: 'asdfasdfasdfasd' }
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmpolyeeList);
