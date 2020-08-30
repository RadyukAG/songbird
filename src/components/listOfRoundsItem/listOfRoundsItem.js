import React from 'react';
import './listOfRoundsItem.css';

const ListOfRoundsItem = (props) => {
  return (
    <li className={props.className}
        data-id={props.name}
        >
      <a href="#">{props.name}</a>
    </li>
  )
}

export default ListOfRoundsItem;
