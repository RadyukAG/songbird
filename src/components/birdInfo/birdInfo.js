import React from 'react';
import Player from '../player';
import BirdImage from '../bird-image';
import latinNameAdaptation from '../../features/latinNameAdoptation';

const BirdInfo = (obj) => {
  const latinName = latinNameAdaptation(obj.latinName);
  return (
    <div>
      <BirdImage birdImagesrc={obj.image}/>
      <div>
        <h2>{obj.name}</h2>
        <p>{latinName}</p>
        <Player />
      </div>
      <p className="bird-description">{obj.description}</p>
    </div>
  )
}

export default BirdInfo;
