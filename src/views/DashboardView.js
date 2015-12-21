import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as userActions } from '../redux/modules/user'

const mapStateToProps = (state) => ({
  user: state.user,
  dashboard: state.dashboard
})
export class DashboardView extends Component {
  static propTypes = {
    user: PropTypes.object,
    dashboard: PropTypes.object
  }

  render () {
    return (
      <div className='container text-center'>
        <h1>HackDash</h1>
        <hr />
      </div>
    )
  }

}

export default connect(mapStateToProps, userActions)(DashboardView)
