import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as dashboardActions } from 'redux/modules/dashboard'

const mapStateToProps = (state) => ({
  dashboards: state.dashboard.dashboardsById
})

class DashboardView extends Component {
  static propTypes = {
    dashboard: PropTypes.object,
    dashboards: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    fetchDashboard: PropTypes.func.isRequired
  }

  render () {
    const { dashboards, params } = this.props
    const dashboard = dashboards[params.dashboard_slug]
    if (dashboard) {
      return (
        <div>
          <h1>About {dashboard.title}</h1>
          <p>{dashboard.description}</p>
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
