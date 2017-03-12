import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/index';
import config from '../config/default.json';
import Router from './Router';
// import { connect } from 'react-redux';
// import * as actions from '../../actions';

class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    // const fbConfig = config.get('private.firebase');
    firebase.initializeApp(config.private.firebase);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
// function mapStateToProps(state) {
//  return { authenticated: state.auth.authenticated };
// }
// export default connect(mapStateToProps, actions)(Header)
export default App;
