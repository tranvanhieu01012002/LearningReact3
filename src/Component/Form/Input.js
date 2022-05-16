import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
        <>
            <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">{this.props.namelb}</label>
                <input value={this.props.val} onChange={this.props.changeHandle} type={this.props.type} name={this.props.name} className="form-control" placeholder={this.props.namelb}  />
            </div>
        </>
    )
  }
}
