import Auth0LockPasswordless from 'auth0-lock-passwordless'
import { createAction, handleActions } from 'redux-actions'
import { auth0_client_id, auth0_domain } from 'config'

// ------------------------------------
// Auth0-Lock initializer
// ------------------------------------
const lock = new Auth0LockPasswordless(auth0_client_id, auth0_domain)
const authOptions = {
  'authParams': { scope: 'openid first_name family_name email picture' }
}

// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
export const REQUEST_PROFILE = 'REQUEST_PROFILE'

// ------------------------------------
// Actions
// ------------------------------------
const requestLogin = createAction(REQUEST_LOGIN)
const receiveLogin = createAction(RECEIVE_LOGIN, (error, { email, picture }, idToken) => ({ error, email, picture, idToken }))
const requestProfile = createAction(REQUEST_PROFILE)

function login () {
  return dispatch => {
    dispatch(requestLogin())
    lock.emailcode(authOptions, (error, profile, idToken) => {
      dispatch(receiveLogin(error, profile, idToken))
      lock.close()
      try {
        localStorage.setItem('userToken', idToken)
      } catch (e) {}
    })
  }
}

function fetchProfile (idToken) {
  return dispatch => {
    dispatch(requestProfile())
    lock.getProfile(idToken, (error, profile) => {
      dispatch(receiveLogin(error, profile, idToken))
    })
  }
}

export const actions = {
  login,
  fetchProfile
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
