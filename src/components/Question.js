import React from 'react';

export default function Question(props) {
  return (
    <div>
      <p>{props.optionOne.text}</p>
      <p>Option One Votes: {props.optionOne.votes.length} </p>
      <p>{props.optionTwo.text}</p>
      <p>Option Two Votes: {props.optionTwo.votes.length} </p>
      <p>{props.timestamp}</p>
      {/* Show vote button(route to NewQuestion component) if author is not authedUser */}}
    </div>
  );
}