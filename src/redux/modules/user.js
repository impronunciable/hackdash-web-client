import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const SET_USER = 'SET_USER'

// ------------------------------------
// Actions
// ------------------------------------
export const setUser = createAction(SET_USER, (value = null) => value)

export const actions = {
  setUser
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [SET_USER]: (state, { payload }) => payload
}, null)
