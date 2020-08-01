import React from 'react';
import './header.css';
import AppTitle from '../appTitle';
import ScoreBlock from '../scoreBlock';

export default class Header extends React.Component {

  render() {
    const { score } = this.props;
    return (
      <header className="main-header d-flex">
        <AppTitle />
        <ScoreBlock score={score} />
      </header>
    )
  }
}
