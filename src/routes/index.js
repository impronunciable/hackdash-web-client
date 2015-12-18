import React from 'react'
import { Route, IndexRoute } from 'react-router'
import CoreLayout from 'layouts/CoreLayout'
import HomeView from 'views/HomeView'
import AboutView from 'views/AboutView'
import ProjectView from 'views/ProjectView'

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='/about' component={AboutView} />
    <Route path='/project' component={ProjectView} />
  </Route>
)
