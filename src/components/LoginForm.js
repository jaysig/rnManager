import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';
// import { Card } from './common';
// import * as actions from '../../actions';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@e.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="password"
            placeholder="email@e.com"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}
const mapStateToProps = state => {
 return {
   email: state.auth.email,
   password: state.auth.password,
  };
};
export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
// export default LoginForm;
