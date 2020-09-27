import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class SignIn extends Component {
  handleOptionChange(event) {
    this.props.dispatch(setAuthedUser(event.target.value));
  }
  // Call setAuthedUser action when user clicks on 
  render() {
    return (
      <div>
        <h2>Sign In page</h2>
        <select value={this.props.value} onChange={(event) => this.handleOptionChange(event)}>
          <option value="sarahedo">sarahedo</option>
          <option value="tylermcginnis">tylermcginnis</option>
          <option value="johndoe">johndoe</option>
        </select>
      </div>
    );
  }
}

export default connect()(SignIn);