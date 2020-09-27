export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser(authedUser) {
  console.log('authedUser', authedUser);
  return {
    type: SET_AUTHED_USER,
    authedUser,
  }
}