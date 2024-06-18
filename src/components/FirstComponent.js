import React from 'react'
import phone from '../images/image.png'
import phvideo from '../images/phvideo.webm'

const FirstComponent = () => {
  return (
    <div className='first-component'>
        <div className='first-component-left'>
        <video autoplay loop controls muted>
        <source src={phvideo} type="video/webm"/>
      </video>
        </div>
    <div className='first-component-right'>
        <h1>Augmented Reality Code</h1>
        <img src="https://ar-code.com/images/ar-qr-code-main.webp" alt="" />
        <h1>No need for App</h1>
        <p>An AR Code is a type of barcode that contains the necessary information to generate an Augmented Reality 3D experience. It operates without the need for a dedicated app on smartphones and AR/VR headsets like the Apple Vision Pro. Begin creating, managing, and tracking your AR experiences.</p>
    </div>
   
  
    </div>
  )
}

export default FirstComponent
