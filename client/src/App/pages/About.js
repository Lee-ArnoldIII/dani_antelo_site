import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import DaniProfile from '../../img/daniProfilePic.jpg'

class About extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <br />
        <section className='hero is-light is-bold'>
          <div className='hero-body'>
            <div className='container'>
              <div>
                <figure className='image is-128x128'>
                  <img className='is-rounded' src={DaniProfile} />
                </figure>
              </div>
              <h1 className='title'>
              About Daniela Antelo
              </h1>
              <h2 className='subtitle'>
                Your Houston Broker Team Leader
              </h2>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default About
