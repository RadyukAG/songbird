import React from 'react';
import Player from '../player';
import BirdImage from '../bird-image';
import latinNameAdaptation from '../../features/latinNameAdoptation';
import getActiveBird from './selectors';
import store from '../../common/store/store';

const LatinName = (props) => {
  return !!props.latinName && <p>{props.latinName}</p>
}

const Description = (props) => {
  return (!!props.description &&
  <p className="bird-description">{props.description}</p>)
}

export default class BirdInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: getActiveBird(),
    }
    store.subscribe(() => {
      if (this.state.obj.image !== getActiveBird().image) {
        this.setState({obj: getActiveBird()});
      }
    })
  }

  render() {
    console.log(getActiveBird());
    return(
      <div>
        <BirdImage birdImageSrc={this.state.obj.image}/>
        <div>
          <h2>{this.state.obj.name}</h2>
          <LatinName latinName={latinNameAdaptation(this.state.obj.latinName)}/>
          <Player />
        </div>
        <Description description={this.state.obj.description}/>
      </div>
    )
  }
}
