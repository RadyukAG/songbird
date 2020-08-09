import React from 'react';
import ListItem from '../listItem';
import './variants.css';
import getRoundData from './getVariants';
import variantClickHandler from './variantClickHandler';

export default class Variants extends React.Component {
  constructor(props) {
    super(props);
    this.items = getRoundData.map((el) => {
      return (
        <ListItem
          key={el.latinName}
          name={el.name}
          onClick={variantClickHandler}
          data-id={el.latinName}
        />)
    })
  }
  render() {
    return (
      <ul className="variants">
        {this.items}
      </ul>
    )
  }
}
