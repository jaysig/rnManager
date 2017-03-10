import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import config from '../config/default.json';
import LoginForm from './components/LoginForm';
// import { connect } from 'react-redux';
// import * as actions from '../../actions';

class App extends Component {

  componentWillMount() {
    // const fbConfig = config.get('private.firebase');
    firebase.initializeApp(config.private.firebase);
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.setState({ loggedIn: true });
    //   } else {
    //     this.setState({ loggedIn: false });
    //   }
    // });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}
// function mapStateToProps(state) {
//  return { authenticated: state.auth.authenticated };
// }
// export default connect(mapStateToProps, actions)(Header)
export default App;
