import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import download from '../../img/download.png'

class Navbar extends Component {
  render () {
    return (
      <div>
        <nav class='navbar' role='navigation' aria-label='main navigation'>
          <div class='navbar-brand'>
            <a class='navbar-item' href='./home'>
              <img src={download} width='100' height='100' />
            </a>

            <a role='button' class='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
              <span aria-hidden='true' />
              <span aria-hidden='true' />
              <span aria-hidden='true' />
            </a>
          </div>

          <div id='navbarBasicExample' class='navbar-menu'>
            <div class='navbar-start'>

              <Link to={'./about'}>
                <a class='navbar-item'>
                    About
                </a>
              </Link>

              <Link to={'./services'}>
                <a class='navbar-item'>
                    Services
                </a>
              </Link>

              <Link to={'./info'}>
                <a class='navbar-item'>
                    Info
                </a>
              </Link>

              <Link to={'./contact'}>
                <a class='navbar-item'>
                    Contact Us
                </a>
              </Link>

            </div>
          </div>

        </nav>
      </div>
    )
  }
}

export default Navbar
