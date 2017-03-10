import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
// import { connect } from 'react-redux';
// import * as actions from '../../actions';

class EmployeeCreate extends Component {

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-5555"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
          />
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
// const mapStateToProps = state => {
//  return { e: state.auth.e };
// }
// const styles = {
//  view:{
//
//  }
//}
// export default connect(mapStateToProps, actions)(App)
export default EmployeeCreate;
