import React, { Component } from 'react'

export default class Btn extends Component {
  render() {
    return (
        <button onClick={this.props.sub} type="button" className="btn btn-success">check</button>
    )
  }
}
