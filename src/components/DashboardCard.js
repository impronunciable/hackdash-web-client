import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

// Constants
const cardClassName = 'col-xs-12 col-md-3'

export default class DashboardCard extends Component {
  static propTypes = {
    dashboard: PropTypes.object.isRequired
  }

  render () {
    const { dashboard } = this.props
    return (
      <Link
        to={`/dashboards/${dashboard.slug}`}
        className={cardClassName}>
        <div>
          <img src={dashboard.cover} />
        </div>
        <div>
          <h3>{dashboard.title}</h3>
          <p>{dashboard.description}</p>
        </div>
      </Link>
    )
  }
}
