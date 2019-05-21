import React, { Component } from 'react'
import Navbar from '../components/Navbar'

const bulma = require('bulma')

class Home extends Component {
  render () {
    return (
      <div>
        <div>
          <Navbar />
        </div>
      </div>
    )
  }
}
export default Home
