import React from 'react'
import { Route, IndexRoute } from 'react-router'
import CoreLayout from 'layouts/CoreLayout'
import DashboardLayout from 'layouts/DashboardLayout'
import HomeView from 'views/HomeView'
import DashboardView from 'views/DashboardView'
import ProjectView from 'views/ProjectView'

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='dashboards/:dashboard_id' component={DashboardLayout}>
      <IndexRoute component={DashboardView} />
      <Route path='projects/:project_id' component={ProjectView} />
    </Route>
  </Route>
)
