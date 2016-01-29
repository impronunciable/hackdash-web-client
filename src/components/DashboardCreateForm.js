import React, { PropTypes, Component } from 'react'

export default class DashboardCreateForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  render () {
    return (
      <div>
        <input style={{marginRight: '10px'}} type='text' ref={input => this._input = input} />
        <button onClick={this._onSubmit.bind(this)} className='btn btn-xs btn-primary'>Create dashboard</button>
      </div>
    )
  }

  _onSubmit () {
    const { onSubmit } = this.props
    onSubmit(this._input.value)
  }
}
