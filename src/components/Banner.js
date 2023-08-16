import React from 'react'
import { NavLink } from 'react-router-dom'

function banner() {
  return (
    <div id='banner'>
      <h1>Test</h1>
      <NavLink to="/login">Log Out</NavLink>
    </div>
  )
}

export default banner
