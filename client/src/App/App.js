import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Info from './pages/Info'
import Contact from './pages/Contact'
import List from './pages/List'

class App extends Component {
  render () {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/info' component={Info} />
          <Route path='/contact' component={Contact} />
          <Route path='/list' component={List} />
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App />
      </Switch>
    )
  }
}

export default App
