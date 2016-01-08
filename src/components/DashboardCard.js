import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import styles from 'styles/components/_project-card.scss'

// Constants
const cardClassName = `col-xs-12 col-md-3 ${styles['ProjectCard__container']}`

export default class DashboardCard extends Component {
  static propTypes = {
    dashboard: PropTypes.object.isRequired
  }

  render () {
    const { dashboard } = this.props
    return (
      <div className={cardClassName}>
        <Link
          to={`/dashboards/${dashboard.slug}`}>
          <div style={{
            backgroundImage: `url(${dashboard.cover || 'http://placehold.it/300x300'})`
          }}
          className={styles['ProjectCard__cover']}>
          </div>
          <div className={styles['ProjectCard__desc']}>
            <h3>{dashboard.title}</h3>
            <p>{dashboard.description}</p>
          </div>
        </Link>
      </div>
    )
  }
}
