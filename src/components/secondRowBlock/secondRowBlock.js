import React from 'react';
import BirdInfo from '../birdInfo';
import Variants from '../variants';

export default class SecondRowBlock extends React.Component {
  render() {
    return (
      <div className="second-row">
        <Variants />
        <BirdInfo />
      </div>
    )
  }
}
