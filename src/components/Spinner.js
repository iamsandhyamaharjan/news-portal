import React, { Component } from 'react'
import loading from './Spinner-3.gif'
export class Spinner extends Component {
  render() {
    return (
      <div>

          <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner