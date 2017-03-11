import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
// import * as actions from '../../actions';

class EmployeeList extends Component {

  componentWillMount() {
    this.props.employeesFetch();
  }
  
  render() {
    return (
      <View>
        <Text>This is a feature</Text>
      </View>
    );
  }
}
// const mapStateToProps = state => {
//  return { e: state.auth.e };
// }
export default connect(null, { employeesFetch })(EmployeeList);
// export default EmployeeList;
