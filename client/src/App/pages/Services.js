import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

class Services extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <br />
        <br />
        <div className='container'>
          <p>The Houston Broker Team offers several services to meet the needs of our clients.
            From buying or selling a home, to finding a great rental that meets your needs.
            Below you will find more information about each of the services provided and how we,
            will work to serve your needs as a member of the Houston Broker Team family.
          </p>
          <br />

          <div className='box' id='home-valuation-request'>
          Home Valuation
          </div>

          <div className='box' id='buy-sell-home'>
            Buying/Selling a home
          </div>

          <div className='box' id='rental-assistance'>
            Finding the perfect rental
          </div>

        </div>
      </div>
    )
  }
}

export default Services
