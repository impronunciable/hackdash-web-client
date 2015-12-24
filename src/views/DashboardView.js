import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ProjectCard from 'components/ProjectCard'
import { actions as dashboardActions } from 'redux/modules/dashboard'

const mapStateToProps = (state) => ({
  user: state.user,
  dashboard: state.dashboard
})

class DashboardView extends Component {
  static propTypes = {
    user: PropTypes.object,
    dashboard: PropTypes.object,
    params: PropTypes.object.isRequired,
    fetchDashboard: PropTypes.func.isRequired
  }

  render () {
    const { dashboard } = this.props

    if (dashboard) {
      return (
        <div className='container text-center'>
          <h1>{dashboard.title}</h1>
          <hr />
          {dashboard.projects.map(project => <ProjectCard dashboard_slug={dashboard.slug} project={project} />)}
        </div>
      )
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
