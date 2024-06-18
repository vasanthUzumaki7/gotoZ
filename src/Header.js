import React from 'react'
import team from './images/team.png'

const Header = () => {
  return (
    <div className='header-container'>
      <h1>Welcome To GoToZ </h1>
      <p>We inform you that we have launched new web application for virtual models</p>
      <img src={team} alt="" />
    </div>
  )
}

export default Header
