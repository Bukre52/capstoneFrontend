import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './components/app'
import About from './components/about'
import AddMovie from './components/add-movie'
import AdminApp from './components/admin-app'

import Footer from './components/Footer'
import NavBar from './components/NavBar'

import './style/main.scss'

function main() {
  ReactDOM.render(
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/admin-app">
          <AdminApp />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/add-movie">
          <AddMovie />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>,
    document.querySelector('.app-wrapper'),
  )
}

document.addEventListener('DOMContentLoaded', main)
