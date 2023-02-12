import React from 'react'

import MainHeader from './MainHeader'
import NavLinks from './NavLinks'
import './MainHeader.css'

const MainNavigation = props => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <a href="/">Your Places</a>
      </h1>
      <nav className="main-navigation__header-nav">
        <NavLinks />
      </nav>
    </MainHeader>
  )
}

export default MainNavigation