import React from 'react';
import ListItem from '../listItem';
import './variants.css';
import variantClickHandler from './variantClickHandler';
import { roundDataSelector } from '../../common/store/selectors';
import store from '../../common/store/store';

export default class Variants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roundData: roundDataSelector(),
    };
    store.subscribe(() => {
      console.log(roundDataSelector());
      if (this.state.roundData !== roundDataSelector()) {
        this.setState(() => {
          return {
            roundData: roundDataSelector(),
          }
        })
      }
    })
  }

  createItems() {
    this.items = this.state.roundData.map((el) => {
      return (
        <ListItem
          key={el.latinName}
          name={el.name}
          onClick={variantClickHandler}
          data-id={el.latinName}
        />)
    });
  }

  render() {
    this.createItems();
    return (
      <ul className="variants">
        {this.items}
      </ul>
    )
  }
}
