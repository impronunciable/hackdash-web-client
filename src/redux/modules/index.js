import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import user from './user'
import dashboard from './dashboard'
import project from './project'

export default combineReducers({
  user,
  dashboard,
  project,
  router: routeReducer
})
