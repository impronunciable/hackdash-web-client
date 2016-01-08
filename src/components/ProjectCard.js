import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import styles from 'styles/components/_project-card.scss'

// Constants
const cardClassName = `col-xs-12 col-md-3 ${styles['ProjectCard__container']}`

export default class ProjectCard extends Component {
  static propTypes = {
    dashboard_slug: PropTypes.string.isRequired,
    project: PropTypes.object.isRequired
  }

  render () {
    const { project, dashboard_slug } = this.props
    return (
      <div className={cardClassName}>
        <Link
          to={`/dashboards/${dashboard_slug}/projects/${project.id}`}>
          <div style={{
            backgroundImage: `url(${project.cover || 'http://placehold.it/300x300'})`
          }}
          className={styles['ProjectCard__cover']}>
          </div>
          <div className={styles['ProjectCard__desc']}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </Link>
      </div>
    )
  }
}
