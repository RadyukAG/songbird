import React from 'react';
import './listItem.css';

const ListItem = (props) => {
  return (
    <li className="list-item list-group-item"
        onClick={props.onClick}
        data-id={props['data-id']}
        >
    <span className="list-dot"></span>
    {props.name}
    </li>
  )
}

export default ListItem;
