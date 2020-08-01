import React from 'react';
import listOfRoundsItem from '../listOfRoundsItem';

export default class ListOfRounds extends React.Component {
  render() {
    const rounds = this.props.names.map(name => listOfRoundsItem(name));
    return (
      <ul className="list-of-rounds">
        {...rounds}
      </ul>
    )
  }
}
