import React from 'react';
import ListItem from '../listItem';
import './variants.css';
import variantClickHandler from './variantClickHandler';
import { roundDataSelector } from '../../common/store/selectors';

export default class Variants extends React.Component {
  constructor(props) {
    super(props);
    this.roundData = roundDataSelector();
  }

  createItems() {
    this.items = this.roundData.map((el) => {
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
