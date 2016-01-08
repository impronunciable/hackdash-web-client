import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions as dashboardActions } from 'redux/modules/dashboard'
import { actions as userActions } from '../redux/modules/user'
import DashboardCreateForm from 'components/DashboardCreateForm'
import DashboardCard from 'components/DashboardCard'

const mapStateToProps = state => {
  return {
    user: state.user,
    dashboards: state.dashboard.dashboards,
    dashboardsById: state.dashboard.dashboardsById
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(Object.assign({}, userActions, dashboardActions), dispatch)
}

class HomeView extends Component {
  static propTypes = {
    createDashboard: PropTypes.func.isRequired,
    user: PropTypes.object,
    dashboards: PropTypes.array.isRequired,
    dashboardsById: PropTypes.object.isRequired,
    fetchProfile: PropTypes.func.isRequired,
    fetchDashboards: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }

  render () {
    const { user, dashboards, dashboardsById } = this.props
    return (
      <div className='container text-center'>
        <h1>HackDash</h1>
        <hr />
        { user ? <DashboardCreateForm onSubmit={this._onSubmit.bind(this)} /> : '' }
        { dashboards.map(d => <DashboardCard key={d} dashboard={dashboardsById[d]} />) }
      </div>
    )
  }

  componentWillMount () {
    const { fetchProfile, fetchDashboards, user } = this.props
    const idToken = localStorage.getItem('userToken')
    if (idToken && !user) {
      fetchProfile(idToken)
    }
    fetchDashboards()
  }

  _onSubmit (title) {
    const { createDashboard, user, history } = this.props
    createDashboard(title, user.idToken)
    .then(() => history.push(`/dashboards/${title}`))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
