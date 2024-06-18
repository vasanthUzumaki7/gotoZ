import React from 'react'
import { FaQrcode } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { FaRegEdit } from "react-icons/fa";
import { IoTimerSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";


const SeventhComponent = () => {
  return (
    <div className='seventh-container' >
      <h1 style={{marginBottom:"30px"}}>Create, Manage, Edit, And Track Your AR QR Codes</h1>

      <div className='seventh-content'>
      <div className='seventh-icon-container'>
      <div className="combo">
        <FaQrcode className="icon" />
        <p>3D Creation</p>
      </div>
      <div className="combo" style={{marginTop:"30px"}}>
        <MdStars className="icon" />
        <p>AR Code Edition</p>
      </div>
      <div className="combo">
        <FcStatistics className="icon" />
        <p>Tracking and Statistics</p>
      </div>
      <div className="combo">
        <FaRegEdit className="icon" />
        <p>Powerful Dashboard</p>
      </div>
      <div className="combo" style={{marginTop:"30px"}}>
        <IoTimerSharp className="icon" />
        <p>AR Code Management</p>
      </div>
      <div className="combo">
        <IoSettings className="icon" />
        <p>API</p>
      </div>
      </div>

      <div className='seventh-content-right' style={{maxWidth:"400px"}}>
        <h2>Dedicated AR Cloud platform</h2>
        <li>AR Code creation, edition, management, and sharing.</li>
        <li>Easy 3D model creation through a web interface and apps (AR Text, AR Portal, AR Frame).</li>
        <li>Detailed tracking stats including location, operating system, and web browser.</li>
        <li>Re-targeting for Facebook/Meta, Google AdWords, LinkedIn, and Twitter ads.</li>
        <li>3D model edition, conversion, and compression through AR Code Studio and support.</li>
        <li>AR Cloud hosting with high performance and scalable cloud infrastructure.</li>
        <li>Team work tailored to large organizations.</li>
      </div>
      </div>

      <div className='seventh-bottom-content'>
        <div>
          <strong>Powering</strong>
          <p>51,248 AR experiences</p>
        </div>
        <div>
          <strong>Serving</strong>
          <p>181,547 Scans per dayTrusted</p>
        </div>
        <div>
          <strong>Trusted by</strong>
          <p>38071 Creators</p>
        </div>
      </div>
      <button>Get Started</button>
      <p>Start creating, managing, and tracking your AR Code experiences.</p>

      </div>
  )
}

export default SeventhComponent
