import { createAction, handleActions } from 'redux-actions'
import fetch from 'isomorphic-fetch'
import { base_url } from 'config'

// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_DASHBOARD = 'REQUEST_DASHBOARD'
export const RECEIVE_DASHBOARD = 'RECEIVE_DASHBOARD'

// ------------------------------------
// Actions
// ------------------------------------
const requestDashboard = createAction(REQUEST_DASHBOARD)
const receiveDashboard = createAction(RECEIVE_DASHBOARD)

function fetchDashboard (slug) {
  return dispatch => {
    dispatch(requestDashboard(slug))
    fetch(`${base_url}/dashboards/${slug}`)
    .then(response => response.json())
    .then(json => dispatch(receiveDashboard(json)))
  }
}

export const actions = {
  fetchDashboard
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [REQUEST_DASHBOARD]: (state, { payload }) => state,
  [RECEIVE_DASHBOARD]: (state, { payload }) => Object.assign({}, payload)
}, null)
