import React from 'react'
import { Route, IndexRoute } from 'react-router'
import CoreLayout from 'layouts/CoreLayout'
import DashboardLayout from 'layouts/DashboardLayout'
import HomeView from 'views/HomeView'
import DashboardView from 'views/DashboardView'
import ProjectView from 'views/ProjectView'
import ProjectCreateView from 'views/ProjectCreateView'
import DashboardAboutView from 'views/DashboardAboutView'
import ProfileView from 'views/ProfileView'

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='dashboards/:dashboard_slug' component={DashboardLayout}>
      <IndexRoute component={DashboardView} />
      <Route path='about' component={DashboardAboutView} />
      <Route path='projects/create' component={ProjectCreateView} />
      <Route path='projects/:project_id' component={ProjectView} />
      <Route path='/users/me' component={ProfileView}/>
    </Route>
  </Route>
)
