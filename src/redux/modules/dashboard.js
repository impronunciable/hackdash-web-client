import { createAction, handleActions } from 'redux-actions'
import fetch from 'isomorphic-fetch'
import { base_url } from 'config'
import { authHeader } from 'redux/utils/auth'

// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_DASHBOARD = 'REQUEST_DASHBOARD'
export const RECEIVE_DASHBOARD = 'RECEIVE_DASHBOARD'
export const REQUEST_CREATE_DASHBOARD = 'REQUEST_CREATE_DASHBOARD'
export const RECEIVE_CREATE_DASHBOARD = 'RECEIVE_CREATE_DASHBOARD'

// ------------------------------------
// Actions
// ------------------------------------
const requestDashboard = createAction(REQUEST_DASHBOARD)
const receiveDashboard = createAction(RECEIVE_DASHBOARD)
const requestCreateDashboard = createAction(REQUEST_DASHBOARD)
const receiveCreateDashboard = createAction(RECEIVE_DASHBOARD)

function fetchDashboard (slug) {
  return dispatch => {
    dispatch(requestDashboard(slug))
    fetch(`${base_url}/dashboards/${slug}`)
    .then(response => response.json())
    .then(json => dispatch(receiveDashboard(json)))
  }
}

function createDashboard (title, idToken) {
  return dispatch => {
    dispatch(requestCreateDashboard(title))
    fetch(`${base_url}/dashboards`, { method: 'POST', headers: authHeader(idToken), body: JSON.stringify({slug: title}) })
    .then(response => response.json())
    .then(json => dispatch(receiveCreateDashboard(json)))
  }
}

export const actions = {
  fetchDashboard,
  createDashboard
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [REQUEST_DASHBOARD]: (state, { payload }) => state,
  [RECEIVE_DASHBOARD]: (state, { payload }) => Object.assign({}, payload)
}, null)
