import React from 'react';
import './listItem.css';

const ListItem = (name, styleClass = "list-item", onclick) => {
  return (
    <li className={styleClass}
        onClick={onclick}>
    <span className="list-dot"></span>
    {name}
    </li>
  )
}

export default ListItem;
