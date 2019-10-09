import React from 'react'
import { Router } from '@reach/router'

import Footer from './Footer'
import NavBar from './NavBar'
import PageCalendar from './PageCalendar'
import PageLogin from './PageLogin'
import PageProfile from './PageProfile'
import PageUsers from './PageUsers'

const App = () => {
  return (
    <div className="o-layout">
      <NavBar />
      <Router>
        <PageCalendar path="/" />
        <PageCalendar path="calendar" />
        <PageCalendar path="calendar/:year" />
        <PageCalendar path="calendar/:year/:month" />
        <PageLogin path="login" />
        <PageProfile path="profile" />
        <PageUsers path="users" />
      </Router>
      <Footer  />
    </div>
  )
}

export default App