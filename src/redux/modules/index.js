import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import user from './user'
import dashboard from './dashboard'

export default combineReducers({
  user,
  dashboard,
  router: routeReducer
})
