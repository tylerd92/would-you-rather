import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  ANSWER_QUESTION
} from '../actions/questions';

export default function questions(state = null, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      };

    case ANSWER_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...action.authedUser,
          answers: {
            ...action.answers,
            [action.questId]: action.answer
          }
        }
      };

    default:
      return state;
  }
}