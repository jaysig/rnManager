import _ from 'lodash';
import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';
import { Card, CardSection, Button } from './common';
// import * as actions from '../../actions';

class EmployeeEdit extends Component {

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
        {/* <Text>This is a feature</Text> */}
      </Card>
    );
  }
}
const mapStateToProps = (state) => {
 const { name, phone, shift } = state.employeeForm;

 return { name, phone, shift };
};
// const styles = {
//  view:{
//
//  }
//}
export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
