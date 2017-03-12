import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';
// import { Card } from './common';
// import * as actions from '../../actions';

class LoginForm extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    // const fbConfig = config.get('private.firebase');
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      console.log(this.state);
      if (user) {
        console.log('hello');
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  renderContent() {
    console.log(this.state.loggedIn);
  switch (this.state.loggedIn) {
    case true:
      return (
        Actions.main({ type: 'reset' })
      );
    case false:
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
              <Text style={styles.errorTextStyle}>
                {this.props.error}
              </Text>
              <CardSection>
                {this.renderButton()}
              </CardSection>
            </Card>
          );
    default:
      // return <CardSection><Spinner /></CardSection>;
      return (
      <View
        style={{
          alignSelf: 'center'
        }}
      >
        <Spinner />
      </View>);
    }
  }

  render() {
    return (
      <View>
        {this.renderContent()}
      </View>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
 return {
   email,
   password,
   error,
   loading
  };
};
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
// export default LoginForm;
