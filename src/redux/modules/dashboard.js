import { createAction, handleActions } from 'redux-actions'
import fetch from 'isomorphic-fetch'
import { base_url } from 'config'
import { authHeader } from 'redux/utils/auth'

// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_DASHBOARD = 'REQUEST_DASHBOARD'
export const RECEIVE_DASHBOARD = 'RECEIVE_DASHBOARD'
export const REQUEST_DASHBOARDS = 'REQUEST_DASHBOARDS'
export const RECEIVE_DASHBOARDS = 'RECEIVE_DASHBOARDS'
export const REQUEST_CREATE_DASHBOARD = 'REQUEST_CREATE_DASHBOARD'
export const RECEIVE_CREATE_DASHBOARD = 'RECEIVE_CREATE_DASHBOARD'

// ------------------------------------
// Actions
// ------------------------------------
const requestDashboard = createAction(REQUEST_DASHBOARD)
const receiveDashboard = createAction(RECEIVE_DASHBOARD)
const requestDashboards = createAction(REQUEST_DASHBOARDS)
const receiveDashboards = createAction(RECEIVE_DASHBOARDS)
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

function fetchDashboards () {
  return dispatch => {
    dispatch(requestDashboards())
    fetch(`${base_url}/dashboards`)
    .then(response => response.json())
    .then(json => dispatch(receiveDashboards(json)))
  }
}

function createDashboard (title, idToken) {
  return dispatch => {
    dispatch(requestCreateDashboard(title))
    const config = {
      method: 'POST',
      headers: authHeader(idToken),
      body: JSON.stringify({slug: title})
    }
    return fetch(`${base_url}/dashboards`, config)
    .then(response => response.json())
    .then(json => dispatch(receiveCreateDashboard(json)))
  }
}

export const actions = {
  fetchDashboard,
  fetchDashboards,
  createDashboard
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [REQUEST_DASHBOARD]: (state, { payload }) => state,
  [RECEIVE_DASHBOARD]: (state, { payload }) => ({
    dashboards: Array.from(new Set([...state.dashboards, payload.slug])),
    dashboardsById: Object.assign({}, state.dashboardsById, {[payload.slug]: payload})
  }),
  [REQUEST_DASHBOARDS]: (state, { payload }) => state,
  [RECEIVE_DASHBOARDS]: (state, { payload }) => ({
    dashboards: Array.from(new Set([...state.dashboards, ...payload.map(d => d.slug)])),
    dashboardsById: Object.assign({}, state.dashboardsById, payload.reduce((prev, curr) => { prev[curr.slug] = curr; return prev }, {}))
  })
}, { dashboards: [], dashboardsById: {} })
