import React from 'react';
import './header.css';
import AppTitle from '../appTitle';
import { ScoreBlock } from '../scoreBlock';
import ListOfRounds from '../listOfRounds';

export default class Header extends React.Component {

  render() {
    return (
      <header className="main-header d-flex">
        <AppTitle />
        <ScoreBlock />
        <ListOfRounds names={this.props.names} />
      </header>
    )
  }
}
