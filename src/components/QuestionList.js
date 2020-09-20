import React, { Component } from 'react';
import { connect } from 'react-redux'
import Question from './Question';

class QuestionList extends Component {
  render() {
    return (
      <div>
        <h1>Question List</h1>
        {this.props.questionsList.map((question) => (
          <Question question={question}/>
        ))}
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questionsList: questions
  }
}
export default connect(mapStateToProps)(QuestionList);