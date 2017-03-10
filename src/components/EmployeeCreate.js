import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ props: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ props: 'phone', value })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
             <Picker.Item label="Monday" value="Monday" />
             <Picker.Item label="Tuesday" value="Tuesday" />
             <Picker.Item label="Wednesday" value="Wednesday" />
             <Picker.Item label="Thursday" value="Thursday" />
             <Picker.Item label="Friday" value="Friday" />
             <Picker.Item label="Saturday" value="Saturday" />
             <Picker.Item label="Sunday" value="Sunday" />
        </Picker>
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}
const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;
 return { name, phone, shift };
};
const styles = {
 pickerLabelStyle: {
   fontSize: 18,
   paddingLeft: 20
 }
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
