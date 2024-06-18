import React from 'react'
import qr1 from './images/qr1.png'

const Four = () => {
  return (
    <div className='four-container'>
        <div className='four-left'>
        <h1>Student Tracking App</h1>
        <p>Handling young children is a tremendous responsiblity! The School Bus Attendant App  is a feature-paked App that Empowers the nannies or Attendant and facilitates easy and efficient School bus.</p>
        </div>
        <div className='four-right' style={{backgroundColor:"yellow"}}>
            <h1>Revolutionary Cloud-based App to Track your Precious Youngster</h1>
            <img src={qr1} alt="" />
        </div>
    </div>
  )
}

export default Four
