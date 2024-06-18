import React, { useState } from 'react';
import tile1 from './images/tiles/tile1.png';
import tile2 from './images/tiles/tile2.png';
import tile3 from './images/tiles/tile3.png';
import tile4 from './images/tiles/tile4.png';
import tile1obj from './images/3dobj/tile1obj.glb';
import tile2obj from './images/3dobj/tile2obj.glb';
import tile3obj from './images/3dobj/tile3obj.glb';
import tile4obj from './images/3dobj/tile4obj.glb';

const Third = () => {
  const models = [tile1obj, tile2obj, tile3obj, tile4obj]; // Array of 3D models
  const [currentModelIndex, setCurrentModelIndex] = useState(0); // Index of the currently displayed model

  const animeArr = [
    {
      id: 1,
      img: tile1,
    },
    {
      id: 2,
      img: tile2,
    },
    {
      id: 3,
      img: tile3,
    },
    {
      id: 4,
      img: tile4,
    },
  ];

  const selectModel = (id) => {
    setCurrentModelIndex(id - 1); // Arrays are zero-indexed, so adjust for the id
  };

  return (
    <div className="third-one-container">
      <div>
      <div className="third-one-left">
        <model-viewer
          style={{ width: "400px", height: "400px" }}
          alt="Model Viewer"
          src={models[currentModelIndex]}
          ar ar-placement='floor'
          shadow-intensity="1"
          camera-controls
          touch-action="pan-y"
        ></model-viewer>
      </div>
      <div className="anime-pic" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        {animeArr.map((item) => (
          <img key={item.id} src={item.img} alt={`Tile ${item.id}`} onClick={() => selectModel(item.id)} style={{ cursor: "pointer", margin: "5px" }} />
        ))}
      </div>
      </div>
      <div className="third-one-right">
        <h1>Elevate your Business With our Digital Transformation Solutions</h1>
        <p>Accelerate your Business</p>
        <div>
          <button>Read More</button>
          <button>Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default Third;
