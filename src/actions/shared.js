import { getInitialData } from '../util/api';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { setAuthedUser } from './authedUser';

// authed_id is argument
export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
      })
  }
}