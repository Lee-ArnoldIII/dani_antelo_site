import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import DaniProfile from '../../img/daniProfilePic.jpg'
import '../../styles/About.css'

class About extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <br />
        {/* Upper hero */}
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

        {/* Lower hero */}
        <section className='hero gunmetal is-large'>
          <div className='hero-body'>
            <div className='container gunmetal'>
              <p>Daniela Antelo has been a Houston-based real estate professional since 2011.
                Over the course of her career, she has earned multiple designations, such as Certified
                Negotion Expert (CNE), Accredited Luxury Home Specialist (ALHM), and Accredited Buyer
                Representative (AABR). She earned her Broker's license in 2018 and is currently a Broker
                Associate with Keller Williams Reality.
              </p>

            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default About
