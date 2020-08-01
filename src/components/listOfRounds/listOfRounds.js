import React from 'react';
import ListOfRoundsItem from '../listOfRoundsItem';
import './listOfRounds.css';

export default class ListOfRounds extends React.Component {
  render() {
    return (
      <ul className="list-of-rounds">
        {this.props.names.map(ListOfRoundsItem)}
      </ul>
    )
  }
}
