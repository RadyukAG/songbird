import React from 'react';
import './bird-image.css';

const BirdImage = ({birdImageSrc}) => {
  return <img className="bird-image"
          src={birdImageSrc}
          alt="Bird"></img>
}

export default BirdImage;
