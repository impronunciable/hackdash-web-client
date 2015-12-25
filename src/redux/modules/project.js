import { createAction, handleActions } from 'redux-actions'
import fetch from 'isomorphic-fetch'
import { base_url } from 'config'

// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_PROJECT = 'REQUEST_PROJECT'
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT'

// ------------------------------------
// Actions
// ------------------------------------
const requestProject = createAction(REQUEST_PROJECT)
const receiveProject = createAction(RECEIVE_PROJECT)

function fetchProject (dashboardSlug, id) {
  return dispatch => {
    dispatch(requestProject(dashboardSlug, id))
    fetch(`${base_url}/dashboards/${dashboardSlug}/projects/${id}`)
    .then(response => response.json())
    .then(json => dispatch(receiveProject(json)))
  }
}

export const actions = {
  fetchProject
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [REQUEST_PROJECT]: (state, { payload }) => state,
  [RECEIVE_PROJECT]: (state, { payload }) => Object.assign({}, payload)
}, null)
