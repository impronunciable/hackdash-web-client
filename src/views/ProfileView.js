import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as userActions } from 'redux/modules/user'
import styles from 'styles/components/_profile.scss'

const mapStateToProps = (state) => ({
  user: state.user
})

class ProfileView extends Component {
  static propTypes = {
    user: PropTypes.object,
    fetchProfile: PropTypes.func.isRequired
  };

  render () {
    const { user } = this.props
    return (
      <div className='container text-center'>
        <h1>Profile</h1>
        <p className={styles['Profile__email']}>{user.email}</p>
        <img className={styles['Profile__avatar']} src={user.picture} alt={user.email} />
      </div>
    )
  }

  componentWillMount () {
    const { fetchProfile, user } = this.props
    const idToken = localStorage.getItem('userToken')
    if (idToken && !user) {
      fetchProfile(idToken)
    }
  }

}

export default connect(mapStateToProps, userActions)(ProfileView)
