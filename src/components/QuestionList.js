import React, { Component } from 'react';
import { connect } from 'react-redux'

class QuestionList extends Component {
  render() {
    return (
      <div>
        Question List
      </div>
    );
  }
}
//map state to props
export default connect()(QuestionList);