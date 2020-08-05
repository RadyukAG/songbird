import React from 'react';
import data from '../../data/data';
import ListItem from '../listItem';
import './variants.css';

const birds = data["Дневные хищники"].map((el) => el.name);

const Variants = () => {
  return (<ul className="variants">
    {...birds.map((el) => ListItem(el))}
  </ul>)
}

export default Variants;
