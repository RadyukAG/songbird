import React from 'react';
import ListOfRoundsItem from '../listOfRoundsItem';
import './listOfRounds.css';
import store from '../../common/store/store';

export default class ListOfRounds extends React.Component {
  constructor(props) {
    super(props);
    this.defaultLIClass = 'list-of-rounds__item';
    this.activeLIClass = 'list-of-rounds__item active';
    this.roundNumber = store.getState().roundNumber - 1;
    this.state = {
      rounds: this.props.names.map((el, i) => {
        return <ListOfRoundsItem
                name={el}
                className={i === this.roundNumber ? this.activeLIClass : this.defaultLIClass}
                />
        }),
    }

    store.subscribe(() => {
      const roundNumber = store.getState().roundNumber - 1;
      if (this.roundNumber !== roundNumber) {
        this.roundNumber = roundNumber;
        this.setState(() => {
          return {
            rounds: this.props.names.map((el, i) => {
              return <ListOfRoundsItem
                      name={el}
                      className={i === this.roundNumber ? this.activeLIClass : this.defaultLIClass}
                      />
              }),
          }
        })
      }
    })
  }

  render() {
    return (
      <ul className="list-of-rounds">
        {this.state.rounds}
      </ul>
    )
  }
}
