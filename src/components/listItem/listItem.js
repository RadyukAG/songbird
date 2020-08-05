import React from 'react';
import './listItem.css';

const ListItem = (name, styleClass = "list-item") => {
  return (<li className={styleClass}>
          <span className="list-dot"></span>
          {name}
          </li>)
}

export default ListItem;
