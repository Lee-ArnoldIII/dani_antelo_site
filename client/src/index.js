import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './styles/index.css'
import App from './App/App'

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
