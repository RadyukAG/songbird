import React from 'react';
import './listOfRoundsItem.css';

const ListOfRoundsItem = (name) => {
  return (
    <li className="list-of-rounds__item">
      <a href="#">{name}</a>
    </li>
  )
}

export default ListOfRoundsItem;
