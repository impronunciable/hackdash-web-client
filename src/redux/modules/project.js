import { createAction, handleActions } from 'redux-actions'
import fetch from 'isomorphic-fetch'
import { base_url } from 'config'
import { authHeader } from 'redux/utils/auth'

// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_PROJECT = 'REQUEST_PROJECT'
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT'
export const REQUEST_CREATE_PROJECT = 'REQUEST_CREATE_PROJECT'
export const RECEIVE_CREATE_PROJECT = 'RECEIVE_CREATE_PROJECT'

// ------------------------------------
// Actions
// ------------------------------------
const requestProject = createAction(REQUEST_PROJECT)
const receiveProject = createAction(RECEIVE_PROJECT)
const requestCreateProject = createAction(REQUEST_CREATE_PROJECT)
const receiveCreateProject = createAction(RECEIVE_CREATE_PROJECT)

function fetchProject (id) {
  return dispatch => {
    dispatch(requestProject(id))
    fetch(`${base_url}/projects/${id}`)
    .then(response => response.json())
    .then(json => dispatch(receiveProject(json)))
  }
}

function createProject (data, idToken) {
  return dispatch => {
    dispatch(requestCreateProject(data))
    const config = {
      method: 'POST',
      headers: authHeader(idToken),
      body: JSON.stringify(data)
    }
    return fetch(`${base_url}/projects`, config)
    .then(response => response.json())
    .then(json => dispatch(receiveCreateProject(json)))
  }
}

export const actions = {
  fetchProject,
  createProject
}

// ------------------------------------
// Reducer TODO: Add handlers for creation
// ------------------------------------
export default handleActions({
  [REQUEST_PROJECT]: (state, { payload }) => state,
  [RECEIVE_PROJECT]: (state, { payload }) => Object.assign({}, payload),
  [REQUEST_CREATE_PROJECT]: (state, { payload }) => state,
  [RECEIVE_CREATE_PROJECT]: (state, { payload }) => state
}, null)
