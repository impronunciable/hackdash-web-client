import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'

// ------------------------------------
// Actions
// ------------------------------------
const requestLogin = createAction(REQUEST_LOGIN)
const receiveLogin = createAction(RECEIVE_LOGIN, (error, { email, picture }, idToken) => ({ error, email, picture, idToken }))

function login (clientId, domain) {
  return dispatch => {
    dispatch(requestLogin())
    const lock = new Auth0LockPasswordless(clientId, domain)
    lock.emailcode((error, profile, idToken) => {
      dispatch(receiveLogin(error, profile, idToken))
      lock.close()
    })
  }
}

export const actions = {
  login
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [REQUEST_LOGIN]: (state, { payload }) => state,
  [RECEIVE_LOGIN]: (state, { payload }) => {
    if (payload.error) {
      return null
    } else {
      return {
        email: payload.email,
        picture: payload.picture,
        idToken: payload.idToken
      }
    }
  }
}, null)
