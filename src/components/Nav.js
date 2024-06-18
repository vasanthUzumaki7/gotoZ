import React from 'react'

const Nav = () => {
  return (
    <nav className='nav-container'>
        <div className='nav-logo'>
        <h1>GoToZ</h1>
        </div>
      <div className='nav-head-container'>
            <a style={{color:"white",fontSize:"20px",fontWeight:"bold"}}>Solutions &#11206;</a>
            <div className='nav-head-dropdown'>
              <a href="#" >3d Files Upload</a>
              <a href="#">Object Capture</a>
              <a href="#">Ar Logo</a>
              <a href="#">Ar Face</a>
              <a href="#">Ar Portal</a>
              <a href="#">Ar Text</a>
              <a href="#">Ar Video</a>
              <a href="#">AI Code</a>
              <a href="#">Ar Data Api</a>
            </div>
     </div>
     <div className='nav-component'>
     <a href="">Pricing</a>
     <a href="">Blog</a>
     <a href="">Faq</a>
     <a href="">Login</a>
     <button>Get Started</button>
     </div>
    </nav>
  )
}

export default Nav
