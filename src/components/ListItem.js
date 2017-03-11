import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection } from './common';
// import { connect } from 'react-redux';
// import * as actions from '../../actions';

class ListItem extends Component {

  render() {
    const { name } = this.props.employee;

    return (
      <CardSection>
        <Text style={styles.titleStyle}>
          { name }
        </Text>
      </CardSection>
    );
  }
}
// const mapStateToProps = state => {
//  return { e: state.auth.e };
// }
// const styles = {
//  view:{
//
//  }
//}
// export default connect(mapStateToProps, actions)(App)
const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}
export default ListItem;
