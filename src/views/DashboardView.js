import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ProjectCard from 'components/ProjectCard'
import { actions as dashboardActions } from 'redux/modules/dashboard'

const mapStateToProps = (state) => ({
  user: state.user,
  dashboards: state.dashboard.dashboardsById
})

class DashboardView extends Component {
  static propTypes = {
    user: PropTypes.object,
    dashboard: PropTypes.object,
    dashboards: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    fetchDashboard: PropTypes.func.isRequired
  };

  render () {
    const { dashboards, params } = this.props
    const dashboard = dashboards[params.dashboard_slug]
    if (dashboard) {
      if (dashboard.projects && dashboard.projects.length) {
        return (
          <div className='container text-center'>
            <h1>{dashboard.title}</h1>
            <hr />
            {dashboard.projects && dashboard.projects.map(project =>
              <ProjectCard dashboard_slug={dashboard.slug} project={project} key={project.id} />)}
          </div>
        )
      } else {
        return (
          <div className='container text-center'>
            <h1>{dashboard.title}</h1>
            <hr />
            <ProjectCard dashboard_slug={dashboard.slug} project={{
              id: 'create',
              title: 'Create your first project!',
              description: 'Click here to create your first dashboard project.'}}
              key={0} />
          </div>
        )
      }
    } else {
      return (<p>Loading...</p>)
    }
  }

  componentWillMount () {
    const { params, fetchDashboard } = this.props
    fetchDashboard(params.dashboard_slug)
  }
}

export default connect(mapStateToProps, dashboardActions)(DashboardView)
