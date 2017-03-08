import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import reducers from './src/reducers';
// import { connect } from 'react-redux';
// import * as actions from '../../actions';

class App extends Component {

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>This is a feature</Text>
        </View>
      </Provider>
    );
  }
}
// function mapStateToProps(state) {
//  return { authenticated: state.auth.authenticated };
// }
// export default connect(mapStateToProps, actions)(Header)
export default App;
