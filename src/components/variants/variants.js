import React from 'react';
import data from '../../data/data';
import ListItem from '../listItem';
import './variants.css';

const testArray = data["Дневные хищники"];
const birdsNames = testArray.map((el) => el.name);

const Variants = () => {
  return (<ul className="variants">
    {...birdsNames.map((el) => ListItem(el))}
  </ul>)
}

export default Variants;
