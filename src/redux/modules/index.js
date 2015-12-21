import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import user from './user'

export default combineReducers({
  user,
  router: routeReducer
})
