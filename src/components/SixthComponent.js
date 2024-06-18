import React from 'react'

const SixthComponent = () => {
  return (
    <div className='sixth-container'>
      <div className='sixth-container-head' style={{textAlign:"center",maxWidth:"800px"}}>
        <h1 style={{marginBottom:"20px"}}>AR Data: Augmented Reality API</h1>
        <p>The AR Code API allows users to display text data from a remote server in augmented reality by overlaying it on an AR QR Code in the user's real-world view. To do this, the API accesses the data from our remote AR Cloud server and utilizes AR Code rendering technology.</p>
      </div>
      <div className='sixth-container-content'>
        <img src="https://ar-code.com/images/api-ar-code.webp" alt="" />
        <div>
            <h2 style={{marginBottom:"20px"}}>AR Code's AR Data API v1.0</h2>
            <p>The first version lets you generate and edit "Flying Over" codes. This API also provides AR Codes scans statistics. Our API is the perfect way to display remote data anywhere: member card info, IoT data, pricing display, ...</p>
        </div>
      </div>
      <p>Here is an ARCode linked to our API displaying a different quote every day:</p>
      <img style={{width:"300px"}} src="https://ar-code.com/images/ar-code-quote.webp" alt="" />
    </div>
  )
}

export default SixthComponent
